import express from 'express'
import bodyparser from 'body-parser'
import apiRoutes from '../routes/api.routes'
// import { config } from 'dotenv'
// config()

let app = express()
app.use(express.static(__dirname+'../public'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))
app.use('/', apiRoutes)

export default app