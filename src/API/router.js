const express = require('express')
const router = express.Router()

// DATA
const NortonRooms = [011, 012, 013, 015, 016, 017, 020, 101, 102, 103, 104, 105, 201, 202, 203, 204, 205, 206, 207, 208, 209, 232]
const CookeRooms = [8, 221, 224, 'CCRH', 'Heeren']
const CarverRooms = [108, 135, 'Ingram']
const LibraryRooms = ['Mullins', 'Crismon', 'Curriculum']

router.use((req, res, next) => {
	console.log(`Time: ${Date.now()}`)
	next()
})
router.get("/buildings/:building", (req, res) => {
	const building = req.params.building
	res.send(`Hello from the a-p-i (in Adele\'s voice), you requested building ${building}`)
})
router.get("/rooms/:room", (req, res) => {
	const room = req.params.room
	res.send(`Hello from the a-p-i (in Adele\'s voice), you requested room ${room}`) 
})

module.exports = router