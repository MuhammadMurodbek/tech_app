import { render, screen } from '@testing-library/react'

import Products from '../pages/products'

it('Testing Product components', () => {
	render(<Products />)
	const TableProducts = screen.getByRole('table')
	expect(TableProducts).toBeDefined()
})
