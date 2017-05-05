import AddReward from '../src/components/Admin/admin-add-reward/add-reward-main';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('AddReward should render', () => {
  const add = shallow(
    <AddReward />,
  );
  expect(toJson(add)).toMatchSnapshot();
});
