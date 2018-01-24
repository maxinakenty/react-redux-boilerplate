import { connect } from 'react-redux';
import Counter from '../components/Counter';
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

const App = connect(mapStateToProp, mapDispatchToProps)(Counter);
export default App;
