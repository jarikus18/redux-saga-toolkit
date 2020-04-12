const dev = process.env.NODE_ENV !== 'production'
const defaultHost = {
	apiUrl: dev ? 'http://localhost:3000' : `http://${window.location.host}`,
}

const hosts = {
	localhost: defaultHost,
}

const currentHost = hosts[window.location.hostname]
	? hosts[window.location.hostname]
	: defaultHost

export default currentHost
