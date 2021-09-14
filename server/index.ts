const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const compression = require('compression')
const cors = require('cors')
const router = express.Router()
const pg = require('pg')
// Import and Set Nuxt.js options
const config = require('../../nuxt.config.js/index.js')
config.dev = process.env.NODE_ENV !== 'production'
// Init Nuxt.js
const nuxt = new Nuxt(config)
router.get('/', function(req: any, res: any, nuxt: any) {
    var pool = pg.Pool({
      database: 'memo',
      user: 'tatsuhiro', 
      password: 'md5c1b667c001823253bd0cd8a0e7012f10',
      dialect: 'postgres',
      timezone: 'Asia/Tokyo',
      host: 'localhost',
      port: 5432,
      max: 10, // size of the connection pool
      query_timeout: 60000 // 60sec
    });
    pool.connect( function(err: any, client: any) {
        if (err) {
          console.log(err);
        } else {
          client.query('SELECT name FROM staff', function (err: any, result: any) {
            res.render('index', {
              title: 'Express',
              datas: result.rows[0].name,
            });
            console.log(result); 
          });
        }
      });
    });
    module.exports = router;
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