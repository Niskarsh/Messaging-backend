import express from 'express'
import  { addBlock } from '../controllers/blocked.controller'

let router =  express.Router()

router.patch ('/:emailId', addBlock)


export default router