import AdminRewards from '../src/components/Admin/rewards/admin-rewards/rewards-main';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('AdminRewards should render', () => {
  const adminrewards = shallow(
    <AdminRewards />,
  );
  expect(toJson(adminrewards)).toMatchSnapshot();
});
