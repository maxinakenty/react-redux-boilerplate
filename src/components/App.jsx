import React from 'react';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import './App.css';

const App = () => (
  <React.Fragment>
    <h1 className="title">React Todo</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </React.Fragment>
);

export default App;
