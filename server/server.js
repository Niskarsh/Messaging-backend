import app from './utils/common'

const port =  process.env.PORT || 3001

app.listen (port, console.log (`Started listening on port : ${port}`))