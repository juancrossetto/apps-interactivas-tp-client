const express = require('express');
const next = require('next');
const compression = require('compression');
const routes = require('./routes');
const bodyParser = require('body-parser');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = routes.getRequestHandler(app)

app.prepare()
.then(async () => {
  const server = express();
  server.use(compression());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  server.use(express.static('public'));
  server.get('*', (req, res) => handle(req, res))

  
  // server
  server.use(handle).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})