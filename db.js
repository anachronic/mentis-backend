const mongoose = require('mongoose')
const config = require('./config')

mongoose.connect(config.db.uri, { useNewUrlParser: true })

let db = mongoose.connection
db.on('error', error => {
  console.log('ERROR: Cannot connect to database', error)
  process.exit(1)
})

module.exports = {
  db: db,
  mongo: mongoose
}
