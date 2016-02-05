import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import { bindActionCreators } from 'redux';

class AddTodo extends Component {
	render() {
		
		return (
			<ul>
				<div className="addTodo-bar">
					<input 
						id = 'input_id'
						onChange={event=>this.setState({ text: event.target.value, id: event.target.value})}
					/>
					<button 
						onClick= {(event) => this.onClickAction(this.state)} 
					>
						Add ToDo
					</button> 
				</div>
			</ul>
		);
	}

	onClickAction(state) {
		this.props.addTodo(state);
		document.getElementById('input_id').value='';
	}

}

function mapStateToProps(state) {
	return {
		state: state
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({addTodo: addTodo}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
