import express from 'express'
import register from './signup.routes'
import login from './signin.routes'
import message from './message.routes'
import  { accessCors, authenticate } from '../controllers/auth.controller'

let router =  express.Router()
router.use ('/', accessCors)
router.use('/auth', authenticate)
router.use('/register', register)
router.use('/login', login)
router.use('/auth/sendmessage', message)
router.get ('/', (req, res) => {
    res.send ('In backend')
})

export default router