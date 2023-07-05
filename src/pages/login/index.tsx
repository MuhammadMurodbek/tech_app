import {
	LockOutlined,
	UserOutlined
} from '@ant-design/icons'
import {
	Button,
	Checkbox,
	Col,
	Form,
	Input,
	Row
} from 'antd'
import { useModalStore } from '../../store/state.handler'
import { login } from '../../api/api.requests'
import './style.css'

const LoginForm: React.FC = () => {
	const { state, updateAmount } = useModalStore()
	const { loading } = state
	const onFinish = async (values: {
		_username: string
		_password: string
		_subdomain?: string
	}) => {
		values._subdomain = 'toko'

		try {
			updateAmount({ ...state, loading: true })
			const res = await login(values)
			if (res.status == 200) {
				JSON.stringify(
					localStorage.setItem('token', res.data?.token)
				)
				window.location.replace('/products')
			}
		} catch (e: any) {
			updateAmount({
				isOpen: true,
				loading: false,
				data: e,
				showError: false,
				refresh: () => onFinish(values)
			})
		}
	}

	return (
		<Row
			align="middle"
			justify="center"
			style={{ width: '100%' }}
		>
			<Col>
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={onFinish}
				>
					<div className="title">Login</div>
					<Form.Item
						name="_username"
						rules={[
							{
								required: true,
								message: 'Please input your Username!'
							}
						]}
					>
						<Input
							data-testid="user_input"
							prefix={
								<UserOutlined className="site-form-item-icon" />
							}
							placeholder="Username"
						/>
					</Form.Item>
					<Form.Item
						name="_password"
						rules={[
							{
								required: true,
								message: 'Please input your Password!'
							}
						]}
					>
						<Input
							data-testid="password_input"
							prefix={
								<LockOutlined className="site-form-item-icon" />
							}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>
					<Form.Item>
						<Form.Item
							name="remember"
							valuePropName="checked"
							noStyle
						>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>

						<a className="login-form-forgot" href="">
							Forgot password
						</a>
					</Form.Item>

					<Form.Item>
						<Button
							loading={loading}
							type="primary"
							htmlType="submit"
							className="login-form-button"
						>
							Log in
						</Button>
					</Form.Item>
				</Form>
			</Col>
		</Row>
	)
}

export default LoginForm
