import { connect } from 'react-redux';
import { toggleTodo } from '../actionCreators';
import TodoList from '../components/TodoList';
import getVisibleTodos from '../selectors';

const mapStateToProps = state => ({
  todos: getVisibleTodos(state),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => {
    dispatch(toggleTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
