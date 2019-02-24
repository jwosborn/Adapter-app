const express = require('express')
const router = express.Router()
const displayLogTime = require('./Utils/timeHelpers.js')
const removeDuplicates = require('./Utils/removeDuplicates.js')
const DeviceList = require('./Data/Devicelist.js')
const RoomList = require('./Data/ClassroomList.js')

const info = `
	<h1>Adapter App API<h1>
	<h2>Available Routes<h2>
	<hr>
	<p>/<p>
	<p>/buildings<p>
	<p>/buildings/:building<p>
	<p>/:building/:room<p>
`

router.use((req, res, next) => {
	let logTime = new Date()
	console.log(displayLogTime())
	next()
})
router.get("/", (req, res) => {
	console.log(req)
	res.send(info)
})
// Fetches an array of building names
router.get("/buildings", (req, res) => {
	console.info(req.headers)
	let buildings = RoomList.map( x => x.building)
	buildings = removeDuplicates(buildings)
	res.send(buildings)
})
// Fetches an array of room objects based on the value passed in for :building
router.get("/buildings/:building", (req, res) => {
	console.log(req)
	const building = req.params.building
	res.send(RoomList.filter( x => x.building === building))
})
// Fetches data by :building and :room
router.get("/buildings/:building/:room", (req, res) => {
	console.log(req)
	const building = req.params.building
	const room = req.params.room
	res.send(`You requested ${building} ${room}`) 
})
// Fetches array of devices
router.get("/devices", (req, res) => {
	console.log(req)
	res.send(DeviceList)
})
// Fetches specific device and specs
router.get("/devices/:device", (req, res) => {
	let device = req.params.device
	res.send(DeviceList.filter(x => x._id === device))
})

module.exports = router
