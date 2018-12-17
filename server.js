import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { Post } from './models'
import db from './db'

const server = express()
const logger = morgan('tiny')

server.use(cors())
server.use(logger)

server.get('/posts', (req, res) => {
  Post.find().then(posts => {
    res.send({
      status: 'success',
      posts: posts
    })
  })
})

db.once('open', () => {
  server.listen(process.env.PORT || 3000)
})
