export const rem = (px) => +px / 16 + 'rem'

export function cleanObject(obj) {
	try {
		for (let propName in obj) {
			if (
				obj[propName] === null ||
				obj[propName] === undefined ||
				obj[propName] === ''
			) {
				delete obj[propName]
			}
		}
	} catch (e) {
		console.error(e)
	}
}

export const parseJSON = (data) => {
	let value = false
	try {
		value = JSON.parse(data)
	} catch (err) {}
	return value
}
