/* eslint-disable  no-unused-vars */
import Enzyme, { shallow, render, mount } from 'enzyme';
/*  eslint-enable */

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
