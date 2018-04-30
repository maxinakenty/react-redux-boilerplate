import { createSelector } from 'reselect';
import { VisibilityFilters } from '../constants/ActionTypes';

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;

const getVisibilityFilter = state => state.get('visibilityFilter');
const getTodos = state => state.get('todos').toJS();

export default createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return todos;
      case SHOW_COMPLETED:
        return todos.filter(t => t.completed);
      case SHOW_ACTIVE:
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  },
);
