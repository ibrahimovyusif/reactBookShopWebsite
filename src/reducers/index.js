import { combineReducers } from 'redux';
import BookReducer from './reducer_books';
import CategoryReducer from './reducer_categories';

import ActiveBook from './reducer_active_book';
import ActiveCategory from './reducer_active_category'

const rootReducer = combineReducers({
	books: BookReducer,
	activeBook: ActiveBook,
	categories: CategoryReducer,
	activeCategory: ActiveCategory
});

export default rootReducer;
