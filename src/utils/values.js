export function debouncedDecorator(fn, delay = 300) {
	let timerId
	return function (...args) {
		if (timerId) {
			clearTimeout(timerId)
		}
		timerId = setTimeout(() => {
			fn.call(this, ...args)
			timerId = null
		}, delay)
	}
}
