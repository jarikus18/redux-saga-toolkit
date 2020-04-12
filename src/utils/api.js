import Axios from 'axios'
import environment from 'environment'
import events from 'utils/events'
import { AUTH_TOKEN } from 'utils/constants'

const defaultMutationHeaders = {
	'Content-Type': 'application/json',
}

function createAxiosAdapter() {
	const axios = Axios.create({
		baseURL: environment.apiUrl,
	})
	axios.interceptors.request.use((config) => {
		const { headers } = config

		const token = localStorage.getItem(AUTH_TOKEN)

		if (token) {
			headers.Authorization = `Bearer ${token}`
		}

		return config
	})

	axios.interceptors.response.use(
		(response) => response.data,
		(err) => {
			if (!err || !err.response) return err

			const error = err.response

			let errorMessage
			if (error.data) {
				if (error.data.ErrorResponse) {
					errorMessage = error.data.ErrorResponse.Error.Message
				} else if (error.data.error) {
					errorMessage = error.data.error
				} else {
					errorMessage = 'Unknown'
				}
			}

			if (error.status === 401) {
				events.emit('logout')
			} else {
				console.error('Error')
			}
			return Promise.reject(error.data)
		}
	)

	return {
		get(url, params, config) {
			return axios.get(url, { params, ...config })
		},
		post(url, body, headers = defaultMutationHeaders, config) {
			return axios.post(url, body, { headers, ...config })
		},
		put(url, body, headers = defaultMutationHeaders, config) {
			return axios.put(url, body, { headers, ...config })
		},
		patch(url, body, headers = defaultMutationHeaders, config) {
			return axios.patch(url, body, { headers, ...config })
		},
		delete(url, body, headers = defaultMutationHeaders, config) {
			return axios.delete(url, { data: body }, { headers, ...config })
		},
	}
}
export default createAxiosAdapter()
