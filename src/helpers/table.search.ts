export const tableSearch = (
	e: any,
	ref: any,
	setList: any
) => {
	const filterAndSortByName: any = (
		array: any[],
		val: string
	) => {
		const filteredArray = array.filter((item) =>
			item.name
				?.toLowerCase()
				?.startsWith(val?.toLowerCase())
		)
		return filteredArray.sort((a, b) =>
			a.name
				?.toLowerCase()
				?.localeCompare(b.name?.toLowerCase())
		)
	}

	const filteredAndSortedData = filterAndSortByName(
		ref.current,
		e
	)
	setList(filteredAndSortedData)
}
