const displayLogTime = req => {
  let logTime = new Date()
  let hours = logTime.getHours()
  let minutes = logTime.getMinutes()
  return `\n\nAPI route "${req.path}" accessed (${req.method}) at ${formatHours(
    hours,
  )}:${formatMinutes(minutes)} ${morningOrEvening(hours)}\n from ${
    req.hostname
  }(ip: ${req.ip})\n`
}
const formatHours = hours => {
  return hours > 12 ? `${hours - 12}` : hours
}

const formatMinutes = minutes => {
  return minutes < 10 ? `0${minutes}` : minutes
}

const morningOrEvening = hours => {
  return hours < 12 ? 'am' : 'pm'
}

module.exports = displayLogTime
