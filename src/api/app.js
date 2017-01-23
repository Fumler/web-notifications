import http from 'http'
import mongoose from './config/mongoose'
import express from './config/express'
import routes from './routes'

import { env, mongo, port, ip } from './config'

const app = express(routes)
const server = http.createServer(app)

mongoose.connect(mongo.uri)

server.listen(port, ip, () => {
    console.log('Server listening on http://%s:%d, in %s mode', ip, port, env)
})


export default app