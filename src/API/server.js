/* eslint-disable no-console */
const express = require('express')
const app = express()
const port = 4000
const api = require('./api.js')

// app.all('/api/*', requireAuthentication);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})

app.get('/', (req, res) => {
  res.redirect('/api')
})

app.get('/healthcheck', (req, res) => {
  res.send(`
		<div style="margin-top: 5em">
			<h1 style="text-align: center">Hello from the A-P-I <br> – Adele, "Hello")</h1>
		</div>
		`)
})

// Scoping to localhost:4000/api/...
app.use('/api', api)

// Serve static files from src/API/Static @ localhost:4000/static/...
app.use('/static', express.static('Static'))

// Invalid route
app.use((req, res) => {
  return res
    .status(404)
    .send({ code: 404, message: `Route ${req.url} not available.` })
})

// All server errors
app.use((err, req, res) => {
  return res.status(500).send({ error: err })
})

app.listen(port, () =>
  console.log(`App running at http://localhost:${port}/api`),
)
