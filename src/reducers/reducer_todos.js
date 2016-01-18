const todo = (state, action) => {

	switch (action.type) {
		case 'ADD_TODO': 
			return {
				id: action.id,
				text: action.text,
				completed: false
			};

		case 'TOGGLE_TODO':

			if(state.id !== action.id){
				return state;
			}

			return {
				...state,
				completed: !state.completed
			};

		default: 
			return state;
	}
}


const todos = (state = [], action) => {

	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state, 
				todo(undefined, action)
			];

		case 'TOGGLE_TODO':
			return state.map(tState => todo(tState, action));

		default: 
			return state;
	}
};


const visibilityFilter = (state, action) => {
	console.log('yoooo', state)
	switch (action.type) {
		case 'FILTER_ALL': 
		return {
			state
		}

		case 'FILTER_COMPLETED': 

		return {
			state

		}

		case 'FILTER_ACTIVE': 

		return {
			state
		}

		default:
		return state
	}
}

const todoApp = (state ={}, action) => {
	console.log('<MMMMMMMMM',state)
	return {
		todos: todos (
			state.todos,
			action
		),
		visibilityFilter: visibilityFilter(
			state.visibilityFilter,
			action
		)
	};
};

export default todoApp;