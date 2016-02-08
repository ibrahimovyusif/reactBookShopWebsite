import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import { ReactRouter, Router, Route, Link, hashHistory } from 'react-router';

const MAX_NO_RELATED_BOOKS = 8;

class BookList extends Component {
	
	renderList(){

		let selectedBookCategory, selectedBookTagsStr, selectedBookTagsArray;
		let selectedBookId = this.props.bookId;
		let bookList = this.props.books;

		let tagRelatedBooks = [];

		let selectedBook = _.filter(bookList, function(selectedBookItem) {
			window.scrollTo(0, 0);
			if(selectedBookItem.id === parseInt(selectedBookId)) {

				selectedBookCategory =  selectedBookItem.category;

				selectedBookTagsStr = selectedBookItem.tags;
				selectedBookTagsArray = selectedBookTagsStr.split(',');
			}
		});
		
		let no_related_books = 0;
		return this.props.books.map((book) => {
			if(selectedBookCategory === book.category && parseInt(selectedBookId) !== parseInt(book.id)){
				let currentBookTagsArray = book.tags.split(',');
				let no_related_tags = 0;
				// console.log(book.tags);
				for(let i = 0; i<currentBookTagsArray.length; i++) {
					for(let j = 0; j<selectedBookTagsArray.length; j++) {
						if(currentBookTagsArray[i] === selectedBookTagsArray[j]){
							tagRelatedBooks.push(book)
							no_related_tags++;
							console.log('===', no_related_tags);
						}			

					}					
				}

				if(MAX_NO_RELATED_BOOKS > no_related_books){
				no_related_books++;

					return (
				        <div key = {book.title} className="col-lg-4">
							  	<li className="list-group-item"
									key = {book.title}>
								
									<Link to={`/details/${book.id}`}>
										<img src={book.imgSrc} height="150px" alt="..." className="img-rounded"/>
									</Link>
								</li>
					         
					          <h6> <b>Title:</b> {book.title} </h6>
					          <h6> <b>Author:</b> {book.author} </h6>

				        </div>
					);
				}
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