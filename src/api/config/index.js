import path from 'path'

const config = {
    env: process.env.NODE_ENV || 'development',
    root: path.join(__dirname, '../../'),
    port: process.env.PORT || 8080,
    ip: process.env.IP || '0.0.0.0',
    mongo: {
        uri: 'mongodb://localhost/web-notifications-dev',
    }
}

export default config