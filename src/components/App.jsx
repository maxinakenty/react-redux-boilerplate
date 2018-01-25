import React from 'react';
import { hot } from 'react-hot-loader';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

const App = () => (
  <div className="App">
    <h1>React Todo</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default hot(module)(App);
