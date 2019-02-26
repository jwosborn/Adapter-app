const removeDuplicates = arr => {
	let s = new Set(arr)
	let values = s.values()
	return Array.from(values)
}

module.exports = removeDuplicates
