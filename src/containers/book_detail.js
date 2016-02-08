import React, { Component } from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';


export default class BookDetail extends Component {
	render() {
			let selectedBookId = this.props.bookId;
			let bookList = this.props.book;
			let selectedBook = _.filter(bookList, function(item) {
				window.scrollTo(0, 0);
				if(item.id === parseInt(selectedBookId)) return item
			});

		return (
			
			<ul className="information-item">
				<div>
					<h3> {selectedBook[0].title} </h3>
					<img src={selectedBook[0].imgSrc} height="300px" alt="..." className="img-rounded"/>
					<div> <h4><b>Author:</b></h4> {selectedBook[0].author} </div>
					<div> <h4><b>Pages:</b></h4> {selectedBook[0].pages} </div>
					<h4><b>Info:</b></h4> <p> {selectedBook[0].details}</p>
				</div>
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.books
	}
}

export default connect(mapStateToProps)(BookDetail);
