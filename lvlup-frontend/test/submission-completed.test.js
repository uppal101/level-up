import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import SubmissionCompleted from '../src/components/Student/submissions/submission-completed';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('SubmissionCompleted should render', () => {
  const store = mockStore({ lvlupApp });
  const sub = shallow(
    <SubmissionCompleted submission={{ submission_message: 'Good job' }} selectedChallenge={{ name: 'Feed the Hamid' }} store={store} />,
  );
  expect(shallowToJson(sub)).toMatchSnapshot();
});
