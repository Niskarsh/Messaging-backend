import User from '../models/user.model'

export const returnUser = (req, res) => {
    const authToken = req.query.auth
    User.verifyAndReturnToken(authToken).then (token => {
        User.findOne ({token}).then(user => res.send(user)).catch (e => res.status(500).send(e))
    }).catch (e => res.status(500).send(e))
}