import {
	fireEvent,
	render,
	screen,
	waitFor
} from '@testing-library/react'
import ErrorPage from '../pages/errors/error-page'
import { BrowserRouter } from 'react-router-dom'

it('Testing back home button in 404 Error page', async () => {
	render(
		<BrowserRouter>
			<ErrorPage />
		</BrowserRouter>
	)
	fireEvent.click(screen.getByRole('button'))

	await waitFor(() => {
		expect(window.location.pathname).toEqual('/')
	})
})
