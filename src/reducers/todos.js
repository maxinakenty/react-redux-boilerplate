import { Map, List } from 'immutable';
import { handleActions } from 'redux-actions';
import { addTodo, toggleTodo } from '../actionCreators';

let nextTodoId = 0;
const todos = handleActions(
  {
    [addTodo]: (state, action) =>
      state.push(
        Map({
          id: nextTodoId++,
          completed: false,
          text: action.payload.text,
        }),
      ),
    [toggleTodo]: (state, action) =>
      state.map(todo => {
        if (action.payload.id === todo.get('id')) {
          return todo.set('completed', !todo.get('completed'));
        }

        return todo;
      }),
  },
  List(),
);

export default todos;
