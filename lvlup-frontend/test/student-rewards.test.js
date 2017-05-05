import StudentRewards from '../src/components/Student/student-rewards/student-rewards-main';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('StudentRewards should render', () => {
  const reward = shallow(
    <StudentRewards />,
  );
  expect(toJson(reward)).toMatchSnapshot();
});
