import AdminChallenges from '../src/components/Admin/admin-challenges/admin-challenges-main';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('AdminChallenges should render', () => {
  const adminchallenges = shallow(
    <AdminChallenges />,
  );
  expect(toJson(adminchallenges)).toMatchSnapshot();
});
