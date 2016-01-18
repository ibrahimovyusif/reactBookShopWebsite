import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTodo } from '../actions/index';


class TodoList extends Component {
	renderList(){
		return this.props.todos.todos.map((todo) => {
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

			}else{

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
	// whatever is returned will show up as props inside of Booklist
	return {
		todos: state.todos
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ toggleTodo: toggleTodo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);