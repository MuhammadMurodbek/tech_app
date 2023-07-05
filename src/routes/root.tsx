import Dashboard from '../pages/dashboard'
import { useLoaderData } from 'react-router-dom'

export function loader() {
	const token = localStorage.getItem('token')
	return { token }
}

export default function Root() {
	const { token }: any = useLoaderData()
	if (!token) {
		window.location.replace('/login')
		localStorage.clear()
	}
	return <Dashboard />
}
