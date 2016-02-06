import React from 'react';
import { Component } from 'react';

import BookDetail from '../containers/book_detail';
import BookFilter from '../containers/book_filter';
import BookRelatedList from '../containers/book_related_list';


export default class App extends Component {
  render() {
    return (
      <div>
      	<BookDetail bookId={this.props.params.bookId}/>
      	<BookFilter />
      	<BookRelatedList bookId={this.props.params.bookId} />
      </div>
    );
  }
}
