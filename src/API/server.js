const express = require('express')
const app = express()
const port = 4000
const api = require('./api.js')

app.get("/healthcheck", (req, res) => {
	res.send(`
		<div style="margin-top: 5em">
			<h1 style="text-align: center">Hello from the A-P-I <br> (in Adele\'s voice)</h1>
		</div>
		`)
})

// Scoping to localhost:4000/api/...
app.use("/api", api)

// Serve static files from src/API/Static @ localhost:4000/static/...
app.use("/static", express.static('Static'))
// Invalid route
app.use(function(req, res, next) {
  return res.status(404).send({ code: 404, message: `Route ${req.url} not available.` });
})
// All server errors
app.use(function(err, req, res, next) {
  return res.status(500).send({ error: err });
});



app.listen(port, () => console.log(`App running at http://localhost:${port}`))
