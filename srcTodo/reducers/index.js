import { combineReducers } from 'redux';
import TodoReducer from './reducer_todos';
import VisibilityFilterReducer from './reducer_visibility_filter';


const rootReducer = combineReducers({
	todos: TodoReducer,
	visibilityFilter: VisibilityFilterReducer
});

export default rootReducer;
