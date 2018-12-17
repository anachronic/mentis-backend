import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import routes from './routes'
import db from './db'

const server = express()
const logger = morgan('tiny')

server.use(cors())
server.use(logger)

routes(server)

db.once('open', () => {
  server.listen(process.env.PORT || 3000)
})
