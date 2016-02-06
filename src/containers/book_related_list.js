import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import { ReactRouter, Router, Route, Link, hashHistory } from 'react-router';




class BookList extends Component {
	
	renderList(){

		let selectedBookCategory;
		let selectedBookId = this.props.bookId;
		let bookList = this.props.books;
		let selectedBook = _.filter(bookList, function(selectedBookItem) {
			window.scrollTo(0, 0);
			if(selectedBookItem.id === parseInt(selectedBookId)) {
				selectedBookCategory =  selectedBookItem.category;
			}
		});
		return this.props.books.map((book) => {
			if(selectedBookCategory === book.category && parseInt(selectedBookId) !== parseInt(book.id)){

				return (
			        <div key = {book.title} className="col-lg-4">
			          <h4>{book.title} </h4>
						  	<li className="list-group-item"
								key = {book.title}>
							
								<Link to={`/details/${book.id}`}>
									<img src={book.imgSrc} height="150px" alt="..." className="img-rounded"/>
								</Link>
							</li>

			            	<p>{book.details}</p>
						
						<Link to={`/details/${book.id}`}>
			          		<p className="btn btn-primary" role="button">Download &raquo;</p>
						</Link>

			        </div>
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
}

function mapStateToProps(state){
	// whatever is returned will show up as props inside of Booklist
	return {
		books: state.books,
		activeCategory: state.activeCategory || {name: 'all'}
	}
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({selectBook: selectBook}, dispatch);
// }

export default connect(mapStateToProps)(BookList);