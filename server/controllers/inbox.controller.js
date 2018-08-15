import _ from 'lodash'
import Message from '../models/message.model'
import User from '../models/user.model'

export const inbox = (req, res) => {

    const authToken = req.header.authorization.split(' ').pop()
    User.verifyAndReturnToken(authToken).then(token => {
        const receiver = token
        User.findOne({token}).then (user => {

            Message.find({ receiver }).lean().then(messages => {
                let Final_ms = _.filter(messages, message => _.findIndex(user.blocked, message.sender)==-1)
                res.send(Final_ms)
            }).catch(e => res.status(500).send(e))
        }).catch ()
        

    }).catch(e => res.status(500).send(e))
}