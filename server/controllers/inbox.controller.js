import Message from '../models/message.model'

export const inbox = (req, res) => {

    const authToken = req.header.authorization.split(' ').pop()
    User.verifyAndReturnToken(authToken).then(token => {
        const receiver = token
        Message.find({ receiver }).then(messages => {
            res.send(messages)
        }).catch(e => res.status(500).send(e))

    }).catch(e => res.status(500).send(e))
}