import React from 'react'
import { Button, Result } from 'antd'
import './style.css'

const ErrorPage: React.FC = () => {
	return (
		<div className="wrapper">
			<Result
				status="404"
				title="404"
				subTitle="Sorry, the page you visited does not exist."
				extra={
					<Button
						data-testid="back_home"
						type="primary"
						onClick={() => window.location.replace('/')}
					>
						Back Home
					</Button>
				}
			/>
		</div>
	)
}

export default ErrorPage
