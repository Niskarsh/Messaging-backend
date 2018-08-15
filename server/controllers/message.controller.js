import User from '../models/user.model'
import Message from '../models/message.model'

export const sendMessage = (req, res) => {
    const { subject, content, receiverEmail } = req.body
    const authToken = req.query.auth
    User.verifyAndReturnToken(authToken).then(token => {
        
        User.findOne({ token }).then(user => {
            const sender = user._id
            User.findOne({ emailId: receiverEmail }).then(ruser => {
                const receiver = ruser._id
                let message = new Message({ sender, senderEID:user.emailId, receiver, subject, content })
                message.save().then(data => res.send(data)).catch(e => res.status(500).send(e))
            }).catch(e => res.status(500).send(e))
        }).catch(e => res.status(500).send(e))

    }).catch(e => res.status(500).send(e))

}