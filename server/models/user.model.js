import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { hash } from '../utils/hash'

let userSchema = new mongoose.Schema({
    emailId: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    blocked: {
        type: [String]
    },
    token: {
        type: String,
        required: true
    }
})

userSchema.methods.generateAuthToken = async function () {
    return await hash({ _id: this._id.toHexString(), secret: process.env.SECRET }, null)
}

userSchema.statics.verifyAndReturnToken = function (authToken) {

    return new Promise((resolve, reject) => {
        jwt.verify(authToken, process.env.SECRET, function (err, decoded) {
            if (!err) {
                resolve(decoded.data)
            }
            reject(err)
        });
    })

}

export default mongoose.model("User", userSchema)

