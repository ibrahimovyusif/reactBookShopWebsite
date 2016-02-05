import React, { Component } from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';


export default class BookDetail extends Component {
	render() {
		console.log('11111 ', this.props.bookId)
			let selectedBookId = this.props.bookId;
			let bookList = this.props.book;
			let selectedBook = _.filter(bookList, function(item) {
				window.scrollTo(0, 0);
				if(item.id === parseInt(selectedBookId)) return item
			});
			console.log(selectedBook);

		return (
			
			<ul className="information-item">
				<div>
					<h3> Title: {selectedBook[0].title} </h3>
					<img src={selectedBook[0].imgSrc} height="300px" alt="..." className="img-rounded"/>
					<div> <h4>Pages:</h4> {selectedBook[0].pages} </div>
					<h4>Info:</h4> <p> {selectedBook[0].details}</p>
				</div>
			</ul>
		);
	}
}

function mapStateToProps(state) {
	console.log('aaa', state)
	return {
		book: state.books
	}
}

export default connect(mapStateToProps)(BookDetail);
