const express = require('express')
const router = express.Router()


router.use((req, res, next) => {
	console.log(`Time: ${Date.now()}`)
	next()
})
router.get("/buildings/:building", (req, res) => {
	const building = req.params.building
	res.send(`Hello from the a-p-i (in Adele\'s voice), you requested ${building}`)
})
router.get("/rooms/:room", (req, res) => {
	const room = req.params.room
	res.send("Rooms api route") 
})



module.exports = router