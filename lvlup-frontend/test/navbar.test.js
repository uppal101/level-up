import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavBar from '../src/components/Navbar/navbar';

test('NavBar should render', () => {
  const navbar = shallow(
    <NavBar />,
  );
  expect(toJson(navbar)).toMatchSnapshot();
});
