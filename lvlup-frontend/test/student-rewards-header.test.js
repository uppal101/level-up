import Header from '../src/components/Student/student-rewards/header';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('Header should render', () => {
  const reward = shallow(
    <Header />,
  );
  expect(toJson(reward)).toMatchSnapshot();
});
