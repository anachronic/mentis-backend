import mongoose from 'mongoose'
import config from './config'

mongoose.connect(config.db.uri, { useNewUrlParser: true })

let db = mongoose.connection
db.on('error', error => {
  console.log('ERROR: Cannot connect to database', error)
  process.exit(1)
})

export default db
export { mongoose as mongo }
