import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import { filterTodos } from '../actions/index';

class FilterTodo extends Component {
	render () {
		return (
			<ul>
				<div className="filterTodo-buttons">
					<button  className="filter-all" onClick={()=>this.setVisibilityFilter('FILTER_ALL')} >Show All</button>
					<button  className="filter-completed" onClick={() => this.setVisibilityFilter('FILTER_COMPLETED')} >Show Completed</button>
					<button  className="filter-active" onClick={() => this.setVisibilityFilter('FILTER_ACTIVE')} >Show Active</button>
				</div>
			</ul>
		)
	}

	setVisibilityFilter (filterType) {
		this.props.filterTodos(filterType);
	}
}


function mapStateToProps(state) {
	return {
		todos: state.todos
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({filterTodos: filterTodos}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(FilterTodo);
