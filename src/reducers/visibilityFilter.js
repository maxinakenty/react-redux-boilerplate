import { handleActions } from 'redux-actions';
import { setVisibilityFilter } from '../actionCreators';
import { VisibilityFilters } from '../constants/ActionTypes';

const { SHOW_ALL } = VisibilityFilters;

const visibilityFilter = handleActions(
  {
    [setVisibilityFilter]: (state, action) => action.payload.filter,
  },
  SHOW_ALL,
);

export default visibilityFilter;
