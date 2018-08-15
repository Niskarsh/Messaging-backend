import Message from '../models/message.model'
import User from '../models/user.model'

export const addBlock = (req, res) => {

    const authToken = req.headers.authorization.split(' ').pop()
    User.verifyAndReturnToken(authToken).then(token => {
        User.findOne({ token }).lean().then(user => {
            User.findOne({ emailId: req.params.emailId }).then(toBeBlocked => {
                user.blocked.push(toBeBlocked.token)
                User.findByIdAndUpdate(user._id, { blocked: user.blocked }).then(data => res.send(data)).catch(e => res.status(500).send(e))
            }).catch(e => res.status(500).send(e))
        }).catch(e => res.status(500).send(e))
    }).catch(e => res.status(500).send(e))
}