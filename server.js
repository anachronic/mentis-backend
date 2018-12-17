import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import routes from './routes'
import db from './db'

const server = express()

server.use(cors())
server.use(morgan('tiny'))
server.use(bodyParser.json())

routes(server)

db.once('open', () => {
  server.listen(process.env.PORT || 3000)
})
