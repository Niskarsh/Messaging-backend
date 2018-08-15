import User from '../models/user.model'
import Message from '../models/message.model'

export const sendMessage = (req, res) => {
    const { subject, content, receiverEmail } = req.body
    const authToken = req.header.authorization.split(' ').pop()
    User.verifyAndReturnToken(authToken).then(token => {
        const sender = token
        User.findOne({ emailId: receiverEmail }).then(user => {
            const receiver = user.token
            let message = new Message({ sender, receiver, subject, content })
            message.save().then(data => res.send(data)).catch(e => res.status(500).send(e))
        }).catch(e => res.status(500).send(e))

    }).catch(e => res.status(500).send(e))

}