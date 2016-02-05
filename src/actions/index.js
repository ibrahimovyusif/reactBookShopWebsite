export function selectBook(book) {
	// / selectBook is an action creator,should return action object with ttype property
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}

export function filterBook(category) {
	console.log('--0-0- ', category)
	// / selectcategory is an action creator,should return action object with ttype property
	return {
		type: 'CATEGORY_SELECTED',
		payload: category
	};
}