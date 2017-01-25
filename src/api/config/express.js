import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

export default (routes) => {
  const app = express()

  app.use(morgan('dev'))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use('/api', routes)

  return app
}