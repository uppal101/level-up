import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';
import SubmissionMainForm from '../src/components/Student/submissions/submission-form';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('SubmissionMainForm should render', () => {
  const store = mockStore({ lvlupApp });
  const sub = shallow(
    <SubmissionMainForm store={store} />,
  );
  expect(shallowToJson(sub)).toMatchSnapshot();
});
