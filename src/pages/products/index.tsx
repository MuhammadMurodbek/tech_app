import React, { useEffect, useState } from 'react'
import { Table, Tag } from 'antd'
import type { TableProps } from 'antd/es/table'
import { variations } from '../../api/api.requests'
import { useModalStore } from '../../store/state.handler'
import { columns } from '../../helpers/table.column'

interface DataType {
	key: React.Key
	name: string
	supplier?: string
	address?: string
	description?: string
	barcode?: string
}
const onChange: TableProps<DataType>['onChange'] = (
	pagination,
	filters,
	sorter,
	extra
) => {
	console.log('params', pagination, filters, sorter, extra)
}
const Products: React.FC = () => {
	const { state, updateAmount } = useModalStore()
	const [list, setList] = useState<DataType[]>([])
	const [reload, setReload] = useState<boolean>(false)

	useEffect(() => {
		async function getList() {
			try {
				const res = await variations()
				let data = await res?.data?.items?.map(
					(item: any) => {
						return {
							key: item.id,
							name: item.productName,
							description:
								item.shortDescription || 'no data',
							supplier: item.supplier || 'no data',
							barcode: item.barcode || 'no data',
							taxable: item.taxable || 'no data'
						}
					}
				)
				setList(data)
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

	const taxColumn = {
		title: 'Taxable',
		dataIndex: 'taxable',
		render: (value: any) => {
			return (
				<Tag color={value ? 'success' : 'error'}>
					{value ? 'Available' : 'Disable'}
				</Tag>
			)
		}
	}

	return (
		<Table
			data-testid="table_products"
			loading={state.loading}
			columns={[...columns, taxColumn]}
			dataSource={list}
			onChange={onChange}
		/>
	)
}

export default Products
