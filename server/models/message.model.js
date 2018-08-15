import mongoose from 'mongoose'

let messageSchema = new mongoose.Schema({
    sender : {
        type : String,
        required : true,
    },
    receiver : {
        type : String,
        required : true
    },
    subject : {
        type : String,
        required : true
    },
    content : {
        type: String,
        required : true
    }
})


export default mongoose.model("Message",messageSchema)

