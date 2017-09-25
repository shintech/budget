import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import favicon from 'serve-favicon'
import http from 'http'
import logger from 'winston'
import init from 'shintech-init-db'
import getRouter from './router'
import config from './config'

const _pkg = require(path.join(path.dirname(__dirname), 'package.json'))
const _bootstrapDir = require.resolve('bootstrap').match(/.*\/node_modules\/[^/]+\//)[0]

var app = express()
var server = http.Server(app)
var port = process.env['PORT']

const options = {
  port: port,
  logger: logger,
  environment: 'development',
  config: config
}

options.db = init(options)

var router = getRouter(options)

app.use(favicon(path.join(__dirname, 'resources', 'images', 'favicon.png')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/css', express.static(path.join(_bootstrapDir, 'dist', 'css')))
app.use(express.static(path.join(__dirname, 'static')))
app.use(router)

server.on('request', (req, res) => {
  logger.info(req.method, req.url)
})

server.on('listening', () => {
  logger.info(`${_pkg.name} version ${_pkg.version} is listening on port ${port}...`)
})

server.listen(port)
