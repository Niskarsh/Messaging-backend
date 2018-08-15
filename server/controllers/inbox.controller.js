import _ from 'lodash'
import Message from '../models/message.model'
import User from '../models/user.model'

export const inbox = (req, res) => {
    const authToken = req.query.auth
    User.verifyAndReturnToken(authToken).then(token => {
        User.findOne({ token }).lean().then(user => {
            const receiver = user._id
            Message.find({ receiver }).lean().then(messages => {
                let Final_ms = _.filter(messages, function (message) {
                    return (!_.includes(user.blocked, message.sender))
                })
                res.send(Final_ms)
            }).catch(e => res.status(500).send(e))
        }).catch(e => res.status(500).send(e))
    }).catch(e => res.status(500).send(e))
}