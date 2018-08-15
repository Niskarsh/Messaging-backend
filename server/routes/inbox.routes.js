import express from 'express'
import { inbox } from '../controllers/inbox.controller'

let router = express.Router()

router.get('/', inbox)

export default router