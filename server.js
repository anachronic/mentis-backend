const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const routes = require('./routes')
const db = require('./db').db

const server = express()

server.use(cors())
server.use(bodyParser.json())

if (process.env.NODE_ENV !== 'test') {
  server.use(morgan('tiny'))
}

routes(server)

db.once('open', () => {
  server.listen(process.env.PORT || 3000)
})

module.exports = server
