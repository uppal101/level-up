import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../src/components/Home/footer';

test('Footer should render', () => {
  const home = shallow(
    <Footer />,
  );
  expect(toJson(home)).toMatchSnapshot();
});
