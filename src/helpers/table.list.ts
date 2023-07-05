export function tableList(res: any) {
	let data = res?.data?.items
		?.slice(0, 90)
		?.map((item: any) => {
			return {
				key: item.id,
				name: item.productName,
				description: item.shortDescription || 'no data',
				supplier: item.supplier || 'no data',
				barcode: item.barcode || 'no data',
				taxable: item.taxable || 'no data'
			}
		})

	return data
}
