import http from 'http'
import mongoose from './config/mongoose'
import express from './config/express'
import routes from './routes'
import SocketIO from 'socket.io'

import { env, mongo, port, ip } from './config'

const app = express(routes)
const server = http.createServer(app)

mongoose.connect(mongo.uri)

server.listen(port, ip, () => {
    console.log('Server listening on http://%s:%d, in %s mode', ip, port, env)
})

let io = new SocketIO(server)

io.on('connection', (socket) => {
    console.log("Socket connected: " + socket.id)
    socket.on('action', (action) => {
        if (action.type === 'server/sendMessage') {
            console.log("sendMessage: " + action.data)
            io.emit('action', { type: 'RNS_SHOW_NOTIFICATION', ...action.data.opts, uid: Date.now(), level: action.data.level || 'info' })
            io.emit('action', { type: 'POST_LIST_REQUEST'})
        }
    })
})

export default app