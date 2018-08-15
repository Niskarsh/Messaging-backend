import express from 'express'
import register from './signup.routes'
import login from './signin.routes'
import  { accessCors } from '../controllers/auth.controller'

let router =  express.Router()
router.use ('/', accessCors)
router.use('/register', register)
router.use('/login', login)
router.get ('/', (req, res) => {
    res.send ('In backend')
})

export default router