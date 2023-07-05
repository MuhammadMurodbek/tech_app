import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import type { ColumnsType, TableProps } from 'antd/es/table'
import { variations } from '../../api/api.requests'
import { useModalStore } from '../../store/state.handler'

interface DataType {
	key: React.Key
	name: string
	supplier?: string
	address?: string
	description?: string
	barcode?: string
}

const columns: ColumnsType<DataType> = [
	{
		title: 'Name',
		dataIndex: 'name',
		width: '35%'
	},
	{
		title: 'Supplier',
		dataIndex: 'supplier'
	},
	{
		title: 'Description',
		dataIndex: 'description'
	},
	{
		title: 'Barcode',
		dataIndex: 'barcode'
	},
	{
		title: 'Taxable',
		dataIndex: 'taxable'
	}
]

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
	return (
		<Table
			loading={state.loading}
			columns={columns}
			dataSource={list}
			onChange={onChange}
		/>
	)
}

export default Products
