import SubmissionMain from '../src/components/Student/submissions/submission-main';
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
  const submission = shallow(
    <SubmissionMain store={store} />,
  );
  expect(shallowToJson(submission)).toMatchSnapshot();
});
