import mongoose from 'mongoose'

mongoose.Promise = global.Promise

mongoose.connect (process.env.MONGO_URL, { useNewUrlParser: true }).then ( data => console.log (`MongoDB connected`)).catch (e => console.log(`Didn't connect due to ${e}`))

export default mongoose