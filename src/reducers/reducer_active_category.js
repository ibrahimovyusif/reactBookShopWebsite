export default function(state, action) {

	if(state === undefined) {
		state = null;
	}

	switch(action.type) {
		case 'CATEGORY_SELECTED':
			return action.payload;
	}
	return state;

}