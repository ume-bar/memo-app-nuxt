const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const compression = require('compression')
const cors = require('cors')
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'
// Init Nuxt.js
const nuxt = new Nuxt(config)
// Backend startup script
async function backend() {
    const app = express()
    app.use(compression({
        threshold: 0,
        level: 9,
        memLevel: 9
    }))
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(cors())
    const { host, port } = nuxt.options.backend
    var http = require('http')
    app.set('port', port)
    var server = http.createServer(app)
    server.listen(port, host)
    consola.ready({
        message: `Backend listening on ${host}:${port}`,
        badge: true
    })
}

backend()  // start backend script