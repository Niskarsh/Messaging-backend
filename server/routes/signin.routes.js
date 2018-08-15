import express from 'express'
import { signin } from '../controllers/auth.controller'

let router =  express.Router()

router.post('/', signin)

export default router