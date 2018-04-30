import { createActions } from 'redux-actions';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
} from '../constants/ActionTypes';

export const { addTodo, toggleTodo, setVisibilityFilter } = createActions({
  [ADD_TODO]: text => ({ text }),
  [TOGGLE_TODO]: id => ({ id }),
  [SET_VISIBILITY_FILTER]: filter => ({ filter }),
});
