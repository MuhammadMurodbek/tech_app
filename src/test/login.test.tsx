import { render, screen } from '@testing-library/react'

import LoginForm from '../pages/login'

it('Testing Login component', () => {
	render(<LoginForm />)
	const userInput = screen.getByTestId('user_input')
	const passwordInput = screen.getAllByTestId(
		'password_input'
	)
	expect(userInput).toBeDefined()
	expect(passwordInput).toBeDefined()
})
