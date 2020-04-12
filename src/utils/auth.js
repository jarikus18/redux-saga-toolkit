import { AUTH_TOKEN } from './constants'

export function setToken(token) {
	localStorage.setItem(AUTH_TOKEN, token)
}
export function getToken() {
	return localStorage.getItem(AUTH_TOKEN)
}
export function remoteToken() {
	return localStorage.removeItem(AUTH_TOKEN)
}
export function isAuth() {
	return !!getToken()
}
