import express from 'express'
import bodyparser from 'body-parser'
import sessions from 'client-sessions'
import apiRoutes from '../routes/api.routes'
import { config } from 'dotenv'
config()

let app = express()
app.use(express.static(__dirname+'../public'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))
app.use(sessions({
    cookieName: 'session',
    secret: process.env.SALT,
    duration: 30 * 60 * 1000,// Session expires in 30 mins
    activeDuration: 5 * 60 * 1000
}))

app.use('/', apiRoutes)

export default app