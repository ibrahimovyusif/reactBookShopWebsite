import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {filterTodos} from '../actions/index';

class FilterTodo extends Component {
	render () {
		return (
			<ul>
				<div className="filterTodo-buttons">
					<button  className="filter-all" onClick={()=>this.filterAll('FILTER_ALL')} >Show All</button>
					<button  className="filter-completed" onClick={() => this.filterCompleted('FILTER_COMPLETED')} >Show Completed</button>
					<button  className="filter-active" onClick={() => this.filterActive('FILTER_ACTIVE')} >Show Active</button>
				</div>
			</ul>
		)
	}

	filterAll (filterType) {
		console.log('aaaa ', this.props)

		this.props.filterTodos(filterType);
	}

	filterCompleted (filterType) {
		// this.props.filterTodos(filterType);

		this.props.filterTodos(filterType);


		
	}

	filterActive (filterType) {
		// this.props.filterTodos(filterType);

		this.props.filterTodos(filterType);

		
	}
}


function mapStateToProps(state) {
	return {
		fiteredTodos: state.todos
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({filterTodos: filterTodos}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(FilterTodo);
