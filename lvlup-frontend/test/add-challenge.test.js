import AddChallenge from '../src/components/Admin/admin-add-challenge/add-challenge-main';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('AddChallenge should render', () => {
  const addchallenge = shallow(
    <AddChallenge />,
  );
  expect(toJson(addchallenge)).toMatchSnapshot();
});
