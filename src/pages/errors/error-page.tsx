import React from 'react'
import { Button, Result } from 'antd'

const ErrorPage: React.FC = () => {
	return (
		<div
			style={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
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
