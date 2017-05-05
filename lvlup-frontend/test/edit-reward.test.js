import EditReward from '../src/components/Admin/admin-edit-reward/edit-reward-main';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('EditReward should render', () => {
  const edit = shallow(
    <EditReward />,
  );
  expect(toJson(edit)).toMatchSnapshot();
});
