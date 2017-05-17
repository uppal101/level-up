import StudentChallenges from '../src/components/Student/challenges/challenges-main';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('StudentChallenges should render', () => {
  const challenge = shallow(
    <StudentChallenges />,
  );
  expect(toJson(challenge)).toMatchSnapshot();
});
