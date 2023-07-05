import { ColumnsType } from 'antd/es/table'
import { DataType } from '../utils/interfaces'

export const columns: ColumnsType<DataType> = [
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
