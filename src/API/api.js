const express = require('express')
const app = express()
const port = 4000
const api = require('./router.js')

const NortonRooms = [011, 012, 013, 015, 016, 017, 020, 101, 102, 103, 104, 105, 201, 202, 203, 204, 205, 206, 207, 208, 209, 232]
const CookeRooms = [8, 221, 224, 'CCRH', 'Heeren']
const CarverRooms = [108, 135, 'Ingram']
const LibraryRooms = ['Mullins', 'Crismon', 'Curriculum']

app.use("/api", api)

app.get("/buildings/:building", (req, res) => {
	const building = req.params.building
	res.send(`Hello from the a-p-i (in Adele\'s voice), you requested ${building}`)
})

app.get("/rooms", () => {})









app.listen(port, () => console.log(`Listening on port ${port}`))