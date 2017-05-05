import SubmissionMain from '../src/components/Student/student-challenge-submission/challenge-submission-view';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('SubmissionMain should render', () => {
  const submission = shallow(
    <SubmissionMain />,
  );
  expect(toJson(submission)).toMatchSnapshot();
});
