import React from 'react';
import { Component } from 'react';

import TodoList from '../containers/todo_list'
import AddTodoBar from '../containers/add_todo_bar';
import FilterTodo from '../containers/filter_todos';

export default class App extends Component {
	
  render() {
    return (
      <div>
      	<AddTodoBar />
        <TodoList />
        <FilterTodo />
      </div>
    );
  }
}
