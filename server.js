const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const routes = require('./routes')
const db = require('./db').db
const responseHelper = require('./helpers/ResponseHelper')

const server = express()

server.use(cors())
server.use(bodyParser.json())

if (process.env.NODE_ENV !== 'test') {
  server.use(morgan('tiny'))
} else {
  process.env.PORT = 8400
}

routes(server)
server.use(responseHelper.httpErrorHandler)

db.once('open', () => {
  server.listen(process.env.PORT || 3000)
})

module.exports = server
