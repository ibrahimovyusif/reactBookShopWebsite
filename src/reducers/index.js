import { combineReducers } from 'redux';
import TodoReducer from './reducer_todos';

const rootReducer = combineReducers({
	todos: TodoReducer
});

export default rootReducer;
