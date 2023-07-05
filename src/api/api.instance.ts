import axios from 'axios'

export const request = axios.create({
	baseURL: 'https://toko.ox-sys.com',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		Accept: 'application/json',
		timeout: 3000
	}
})

request.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token')
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`
			config.headers['Content-Type'] = 'application/json'
		} else {
			config.headers['Content-Type'] =
				'application/x-www-form-urlencoded'
		}
		return config
	},
	(error) => {
		Promise.reject(error)
	}
)

request.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response.status === 401) {
			window.location.replace('/login')
			localStorage.clear()
		}
	}
)
