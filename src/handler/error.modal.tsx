import React from 'react'
import {
	TState,
	useModalStore
} from '../store/state.handler'
import {
	Button,
	Divider,
	Modal,
	Space,
	Typography
} from 'antd'

const ModalErrorHandler: React.FC = () => {
	const { state, updateAmount } = useModalStore()
	const {
		data: error,
		isOpen,
		showError,
		refresh
	}: TState | any = state
	const handleCancel = () => {
		updateAmount({
			...state,
			data: null,
			loading: false,
			isOpen: false,
			showError: false
		})
	}

	return (
		<>
			<Modal
				open={isOpen}
				okText="Reload"
				onOk={refresh}
				onCancel={handleCancel}
				title="Something went wrong"
			>
				<Divider />
				<Space align="center" style={{ margin: '10px 0' }}>
					<Typography.Title
						level={5}
						style={{ color: 'red', padding: 0, margin: 0 }}
					>
						{error?.message}
					</Typography.Title>
					<Button
						type="link"
						danger
						size="small"
						onClick={() =>
							updateAmount({
								...state,
								showError: !showError
							})
						}
					>
						show errors
					</Button>
				</Space>
				{showError ? <p>{JSON.stringify(error)}</p> : null}
				<Divider />
			</Modal>
		</>
	)
}

export default ModalErrorHandler
