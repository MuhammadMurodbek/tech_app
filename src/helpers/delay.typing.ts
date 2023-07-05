export function changeDelay(
	change: any,
	setSearchField: any,
	setTimer: any,
	handleChange: any,
	timer: any
) {
	setSearchField(change)
	if (timer) {
		clearTimeout(timer)
		setTimer(null)
	}
	setTimer(
		setTimeout(() => {
			handleChange(change)
		}, 2000)
	)
}
