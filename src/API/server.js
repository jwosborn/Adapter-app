const express = require('express')
const app = express()
const port = 4000
const api = require('./api.js')

app.get("/healthcheck", (req, res) => {
	res.send("Hello from the A-P-I (in Adele\'s voice)")
})

// Scoping to localhost:4000/api/...
app.use("/api", api)

app.listen(port, () => console.log(`App running at http://localhost:${port}`))