import SubmissionMain from '../src/components/Student/student-challenge-submission/challenge-submission-view';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('SubmissionMain should render', () => {
  const store = mockStore({ lvlupApp });
  const sub = shallow(
    <SubmissionMain store={store} />,
  );
  expect(shallowToJson(sub)).toMatchSnapshot();
});
