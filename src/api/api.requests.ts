import { urls } from './api.endpoints'
import { request } from './api.instance'

export const login = (payload: any) =>
	request.post(urls.login, payload)
export const variations = () => request.get(urls.variations)
