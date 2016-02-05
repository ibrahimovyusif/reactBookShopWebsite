import React from 'react';
import { Component } from 'react';

import BookDetail from '../containers/book_detail';
import BookFilter from '../containers/book_filter';
import BookList from '../containers/book_list';


export default class App extends Component {
  render() {
    return (
      <div>
      	<BookDetail bookId={this.props.params.bookId}/>
      	<BookFilter />
      	<BookList />
      </div>
    );
  }
}
