const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const history = require('connect-history-api-fallback')
const open = require('open')
const config = require('../webpack/client/webpack.dev.config.js')
const routes = require('./routes/index')

const app = express()
const compiler = webpack(config)
app.use('/', routes)

app.use(history())


app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    writeToDisk: true,
}))

app.use(webpackHotMiddleware(compiler))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log(`You can open http://localhost:${PORT}/ in the browser`)
    console.log('Press Ctrl+C to quit.')
    open(`http://localhost:${PORT}`)
})
