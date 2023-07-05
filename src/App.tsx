import {
	Navigate,
	RouterProvider,
	createBrowserRouter
} from 'react-router-dom'
import './App.css'
import LoginForm from './pages/login'
import Products from './pages/products'
import ProductsFilter from './pages/search'
import Root, { loader } from './routes/root'
import ErrorPage from './pages/errors/error-page'
import { ErrorHandler } from './handler/error.request'
const router = createBrowserRouter([
	{
		path: '/',
		loader: loader,
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Navigate to="/products" replace />
			},
			{
				path: '/products',
				element: <Products />
			},
			{
				path: '/search',
				element: <ProductsFilter />
			}
		]
	},
	{
		path: '/login',
		element: <LoginForm />
	},
	{
		path: '*',
		element: <ErrorPage />
	}
])
function App() {
	return (
		<>
			<RouterProvider router={router} />
			<ErrorHandler />
		</>
	)
}
export default App
