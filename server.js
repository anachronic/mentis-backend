const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const routes = require('./routes')
const db = require('./db').db

const server = express()

server.use(cors())
server.use(morgan('tiny'))
server.use(bodyParser.json())

routes(server)

db.once('open', () => {
  server.listen(process.env.PORT || 3000)
})
