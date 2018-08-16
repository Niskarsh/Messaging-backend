import express from 'express'

import  { returnUser } from '../controllers/user.controller'

let router =  express.Router()
router.get ('/', returnUser)

export default router