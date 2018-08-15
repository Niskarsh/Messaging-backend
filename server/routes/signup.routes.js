import express from 'express'
import { signup } from '../controllers/auth.controller'

let router =  express.Router()

router.post('/', signup)

export default router