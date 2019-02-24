const express = require('express')
const app = express()
const port = 4000
const api = require('./router.js')

app.use("/api", api)



app.listen(port, () => console.log(`Listening on port ${port}`))