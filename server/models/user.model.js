import mongoose from 'mongoose'
import { hash } from '../utils/hash'

let userSchema = new mongoose.Schema({
    emailId : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    password : {
        type : String,
        required : true
    },
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type: String,
        required : true
    },
    token : {
        type: String,
        required: true
    }
})

userSchema.methods.generateAuthToken = async function () {
    return await hash({_id : this._id.toHexString(), secret : process.env.SECRET}, null)
}

export default mongoose.model("User",userSchema)

