import { DataType } from '../utils/interfaces'

export const tableSearch = (
	e: any,
	ref: React.MutableRefObject<never[]>,
	setList: React.Dispatch<React.SetStateAction<DataType[]>>,
	setLoading: React.Dispatch<React.SetStateAction<boolean>>
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
	setLoading(false)
}
