import SelectedChallenge from '../src/components/Admin/admin-challenges/individual-challenge';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('SelectedChallenge should render', () => {
  const select = shallow(
    <SelectedChallenge />,
  );
  expect(toJson(select)).toMatchSnapshot();
});
