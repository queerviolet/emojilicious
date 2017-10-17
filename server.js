const {join} = require('path')
const express = require('express')

const app = express()
  // The webpack dev middleware builds and serves our bundle
  // directly from memory. This has the advantage of never serving
  // a partial bundle (if, for example, you reload in the middle of
  // a compilation).
  .use(require('./webpack-middleware'))
  .use(express.static(join(__dirname, 'public')))
  .use('/api', require('./api'))
  .get('/*', (req, res) =>
    res.sendFile(join(__dirname, 'index.html')))

const server = app.listen(process.env.PORT || 1337, () =>
    console.log(`Listening on http://localhost:${server.address().port}`))