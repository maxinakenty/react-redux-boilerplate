import { handleActions } from 'redux-actions';
import { addTodo, toggleTodo } from '../actionCreators';

let nextTodoId = 0;
const todos = handleActions(
  {
    [addTodo]: (state, action) => [
      ...state,
      { id: nextTodoId++, completed: false, text: action.payload.text },
    ],
    [toggleTodo]: (state, action) =>
      state.map(todo => {
        if (action.payload.id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
  },
  [],
);

export default todos;
