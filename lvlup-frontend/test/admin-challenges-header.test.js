import Header from '../src/components/Admin/admin-challenges/header';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('Header should render', () => {
  const adminchallenges = shallow(
    <Header />,
  );
  expect(toJson(adminchallenges)).toMatchSnapshot();
});
