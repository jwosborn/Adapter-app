const displayLogTime = () => {
	let logTime = new Date()
	let hours = logTime.getHours()
	let minutes = logTime.getMinutes()
	return `Accessed at ${formatHours(hours)}:${formatMinutes(minutes)} ${morningOrEvening(hours)}`
}
const formatHours = hours => {
	return hours > 12 ? `${hours -12}` : hours
}

const formatMinutes = minutes => {
	return minutes < 10 ? `0${minutes}` : minutes
}

const morningOrEvening = hours => {
	return hours < 12 ? 'am' : "pm"
}

module.exports = displayLogTime