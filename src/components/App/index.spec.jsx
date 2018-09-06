import React from 'react';
import { shallow } from 'enzyme';
import { App } from '.';

describe('App component', () => {
  let wrap = null;
  beforeEach(() => {
    wrap = shallow(<App />);
  });

  it('should render correctly', () => {
    expect(wrap).toMatchSnapshot();
  });
});
