import User from '../models/user.model'
import { hash } from '../utils/hash'

export const accessCors = (req, res, next) => {

    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, PUT');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Credentials', 'true');

    next()
}

export const signin = (req, res) => {

    const { emailId, password } = req.body
    hash(password, null).then(password => {
        User.findOne({ emailId, password }).then(user => {
            hash(user.token, 1800).then(authToken => res.send(authToken)).catch(e => res.status(500).send(e))
        }).catch(e => res.status(500).send(e))
    }).catch(e => res.status(500).send(e))
}

export const signup = (req, res) => {

    const { emailId, password, firstname, lastname } = req.body
    hash(password, null).then(password => {
        let user = new User({ emailId, password, firstname, lastname })
        user.generateAuthToken().then(token => {
            user.token = token
            user.save().then(data => res.send(data)).catch(e => res.status(500).send(e))
        }).catch(e => res.status(500).send(e))
    }).catch(e => res.status(500).send(e))

}

export const authenticate = (req, res, next) => {

    const authToken = req.query.auth
    User.verifyAndReturnToken(authToken).then (token => {
        next()
    }).catch (e => res.status(500).send(`Auth error`))

}