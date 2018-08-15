import express from 'express'

let router =  express.Router()

router.get ('/', (req, res) => {
    res.send ('In backend')
})

export default router