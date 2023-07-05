import React, {
	useCallback,
	useEffect,
	useRef,
	useState
} from 'react'
import { Button, Input, Space, Table } from 'antd'
import { variations } from '../../api/api.requests'
import { Header } from 'antd/es/layout/layout'
import { useModalStore } from '../../store/state.handler'
import { changeDelay } from '../../helpers/delay.typing'
import { columns } from '../../helpers/table.column'
import { tableSearch } from '../../helpers/table.search'
import { tableList } from '../../helpers/table.list'
import { DataType } from '../../utils/interfaces'

const ProductsFilter: React.FC = () => {
	const ref = useRef([])
	const [timer, setTimer] = useState(null)
	const { state, updateAmount } = useModalStore()
	const [list, setList] = useState<DataType[]>([])
	const [reload, setReload] = useState<boolean>(false)
	const [searchField, setSearchField] = useState<string>('')

	useEffect(() => {
		async function getList() {
			try {
				const res = await variations()
				let mutateResponse = tableList(res)
				setList(mutateResponse)
				ref.current = mutateResponse
				updateAmount({ ...state, loading: false })
			} catch (e) {
				updateAmount({
					isOpen: true,
					loading: false,
					data: e,
					showError: false,
					refresh: () => setReload(!reload)
				})
			}
		}
		updateAmount({ ...state, loading: true })
		getList()
	}, [reload])

	const handleChange = useCallback(
		(e: any) => tableSearch(e, ref, setList),
		[list]
	)

	const handleReload = () => {
		setSearchField('')
		setReload(!reload)
	}

	return (
		<>
			<Header
				style={{
					width: '100%',
					padding: 0,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					backgroundColor: 'white'
				}}
			>
				<Input.Search
					style={{ width: 300 }}
					value={searchField}
					placeholder="Search by name"
					onChange={(e) =>
						changeDelay(
							e.target.value,
							setSearchField,
							setTimer,
							handleChange,
							timer
						)
					}
				/>
				<Space>
					<Button onClick={handleReload}>reload</Button>
				</Space>
			</Header>
			<Table
				loading={state.loading}
				columns={columns}
				dataSource={list}
			/>
		</>
	)
}

export default ProductsFilter
