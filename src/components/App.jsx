import React from 'react';
import { hot } from 'react-hot-loader';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import './App.scss';

const Aux = ({ children }) => children;

const App = () => (
  <Aux>
    <h1 styleName="title">React Todo</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Aux>
);

export default hot(module)(App);
