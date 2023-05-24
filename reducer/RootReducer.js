import { combineReducers } from 'redux';
import ToDoReducer from './TodoReducer'

export default combineReducers({
    todo: ToDoReducer,
});