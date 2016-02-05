const visibilityFilter = (state, action) => {
	if(state === undefined) {
		return {
			state: "SHOW_ALL"
		}
	}
	switch (action.type) {
		case 'FILTER_TODO':
		return {
			state: action.filterType
		}

		default:
		return state;
	}
}

export default visibilityFilter;