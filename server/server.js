import 'babel-polyfill'
import app from './utils/common'
import mongoose from './utils/mongoose'

const port =  process.env.PORT || 3001

app.listen (port, console.log (`Started listening on port : ${port}`))