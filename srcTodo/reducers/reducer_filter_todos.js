const filteringTodos = (todos, visibilityAction) => {

	let filteredTodoArray = [];
	switch (visibilityAction.state) {
		case 'FILTER_ALL':
			return todos;
		case 'FILTER_COMPLETED':

			todos.map((todo) => {
				if(todo.completed){
					filteredTodoArray.push(todo)
				}
			})
		return filteredTodoArray;

		case 'FILTER_ACTIVE':

			todos.map((todo) => {
				if(!todo.completed){
					filteredTodoArray.push(todo)
				}
			})
		return filteredTodoArray;

		default:
		 return todos;
	}

			if(filterType === 'FILTER_ALL') {


			this.props.todos.map((todo) => {
				newFilteredTodoList.push(todo);
			});
		}
		else if(filterType === 'FILTER_COMPLETED') {
			this.props.todos.map((todo) => {
				if(todo.completed){
					newFilteredTodoList.push(todo);
				}
			});
		} else {
			this.props.todos.map((todo) => {
				if(!todo.completed){
					newFilteredTodoList.push(todo);
				}
			});
		}
		this.props.filterTodos(newFilteredTodoList)
		return newFilteredTodoList;

}

export default filteringTodos;