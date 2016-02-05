import React, { Component } from 'react';
import { connect } from 'react-redux';
import {filterBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookFilter extends Component {
	
	renderList(){
		return this.props.categories.map((category) => {
			// if(book.category === "math"){
			// 	console.log('aa ', book)
			// }

			return (
				<button 
					className="list-group-item"
					key = {category.name} 
					onClick = {() => this.props.filterBook(category)}
				>
				 {category.name} 
				</button>
			);
		});
	}

	render(){
		return (


			<div className="container-fluid">
  			 <div className="row">
    		  <div className="col-sm-4 col-md-2 sidebar">
      		   <ul className="nav nav-sidebar">

					<ul className ="nav nav-pills">
						{this.renderList()}
					</ul>


      		   </ul>
    		  </div>
  			 </div>
			</div>

		)
	}
}

function mapStateToProps(state){
	// whatever is returned will show up as props inside of BookFilter
	return {
		categories: state.categories
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({filterBook: filterBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookFilter);