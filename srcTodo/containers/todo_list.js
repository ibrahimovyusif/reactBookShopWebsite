import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTodo } from '../actions/index';
import  getFilteredTodoList  from '../reducers/reducer_filter_todos';

class TodoList extends Component {

	renderList(){
		const filteredTodos = getFilteredTodoList(this.props.todos, this.props.visibilityFilter) ;
		return filteredTodos.map((todo) => {
			if(todo.completed){

				return (
						<li 
						className="list-group-item"
						key = {todo.text} 
						onClick = {() => this.toggleTodo(todo)}
						>
						 <strike>{todo.text}</strike>
						 </li>
				);

			} else{

				return (
						<li 
						className="list-group-item"
						key = {todo.text} 
						onClick = {() => this.toggleTodo(todo)}
						>
						 {todo.text} 
						 </li>
				);
			}
		});
	}

	render(){
		return (
			<ul className ="list-group col-sm-4">
				{this.renderList()}
			</ul>

		)
	}

	toggleTodo(todo) {
		this.props.toggleTodo(todo);
	}
}

function mapStateToProps(state){
	return {
		todos: state.todos,
		visibilityFilter: state.visibilityFilter
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ toggleTodo: toggleTodo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);