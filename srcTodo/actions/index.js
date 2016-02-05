export function addTodo(todo) {
	return {
		type: 'ADD_TODO',
		id: todo.id,
		text: todo.text
	};
}

export function toggleTodo(todo) {
	return {
		type: 'TOGGLE_TODO',
		id: todo.id,
	};
}

export function filterTodos (filterType) {
	return {
		type: 'FILTER_TODO',
		filterType: filterType
	}
}