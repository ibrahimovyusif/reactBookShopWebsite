import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import { ReactRouter, Router, Route, Link, hashHistory } from 'react-router';

const BOOK_TITLE_LENGTH = 26;

let stndrdzdBookTitle, stndrdzdAuthorName;

class BookList extends Component {
	
	renderList(){
		return this.props.books.map((book) => {
			if(book.category === this.props.activeCategory.name ||
				this.props.activeCategory.name == 'all'){


				if(book.title.length > BOOK_TITLE_LENGTH) {
					stndrdzdBookTitle = book.title.slice(0,23) + "...";
				} 
				else {
					stndrdzdBookTitle = book.title;
				}
				if(book.author.length > BOOK_TITLE_LENGTH) {
					stndrdzdAuthorName = book.author.slice(0,23) + "...";
				} 
				else {
					stndrdzdAuthorName = book.author;
				}
				return (

			        <div key = {book.title} className="col-lg-2">
						  	<li className="list-group-item"
								key = {book.title}>
							
								<Link to={`/details/${book.id}`}>
									<img src={book.imgSrc} height="150px" width="120px" className="smallBookImages" alt="..." />
								</Link>
							</li>
			          <h6> <b>Title:</b> {stndrdzdBookTitle} </h6>
			          <h6> <b>Author:</b> {stndrdzdAuthorName} </h6>

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