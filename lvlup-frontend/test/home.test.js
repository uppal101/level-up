import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from '../src/components/Home/home';

test('Home should render', () => {
  const home = shallow(
    <Home />,
  );
  expect(toJson(home)).toMatchSnapshot();
});
