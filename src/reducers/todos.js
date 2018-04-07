import { ADD_TODO, TOGGLE_TODO } from '../constants/ActionTypes';

let nextTodoId = 0;
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: nextTodoId++,
          completed: false,
          text: action.text,
        },
      ];

    case TOGGLE_TODO:
      return state.map(todo => {
        if (action.id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todos;
