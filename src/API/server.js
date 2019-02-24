const express = require('express')
const app = express()
const port = 4000
const api = require('./api.js')

app.get("/healthcheck", (req, res) => {
	res.send("Hello from the a-p-i (in Adele\'s voice)")
})

// Scoping to /api/...
app.use("/api", api)

app.listen(port, () => console.log(`Listening on port ${port}`))