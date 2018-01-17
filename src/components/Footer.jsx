import React from 'react';
import FilterLink from '../containers/FilterLInk';

const Footer = () => (
  <footer>
    <FilterLink filter="SHOW_ALL">Ally</FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </footer>
);

export default Footer;
