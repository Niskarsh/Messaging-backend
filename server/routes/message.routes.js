import express from 'express'
import { sendMessage } from '../controllers/message.controller'

let router =  express.Router()

router.post ('/', sendMessage)

export default router