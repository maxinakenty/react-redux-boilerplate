import { combineReducers } from 'redux-immutablejs';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
});

export default rootReducer;
