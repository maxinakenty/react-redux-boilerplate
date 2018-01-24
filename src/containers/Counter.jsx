import { connect } from 'react-redux';
import CounterComponent from '../components/Counter';
import { increment, decrement } from '../actions';

const mapStateToProp = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => {
    dispatch(increment());
  },
  onDecrement: () => {
    dispatch(decrement());
  },
});

const Counter = connect(mapStateToProp, mapDispatchToProps)(CounterComponent);
export default Counter;
