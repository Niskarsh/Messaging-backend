import express from 'express'
import register from './signup.routes'
import login from './signin.routes'
import message from './message.routes'
import inbox from './inbox.routes'
import block from './block.routes'
import  { accessCors, authenticate } from '../controllers/auth.controller'

let router =  express.Router()
router.use ('/', accessCors)
router.use('/register', register)
router.use('/login', login)
router.use('/auth', authenticate)
router.use('/auth/sendmessage', message)
router.use('/auth/inbox', inbox)
router.use('/auth/block', block)
router.get ('/', (req, res) => {
    res.send ('In backend')
})

export default router