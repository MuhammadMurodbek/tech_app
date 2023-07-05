export function changeDelay(
	change: any,
	setSearchField: React.Dispatch<
		React.SetStateAction<string>
	>,
	setTimer: React.Dispatch<React.SetStateAction<any>>,
	handleChange: (e: any) => void,
	timer: null
) {
	setSearchField(change)
	if (timer) {
		clearTimeout(timer)
		setTimer(null)
	}
	setTimer(
		setTimeout(() => {
			handleChange(change)
		}, 1300)
	)
}
