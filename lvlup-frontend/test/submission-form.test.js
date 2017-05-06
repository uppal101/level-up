import SubmssionMainForm from '../src/components/Student/student-challenge-submission/challenge-submission-form';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('SubmssionMainForm should render', () => {
  const store = mockStore({ lvlupApp });
  const sub = shallow(
    <SubmssionMainForm store={store} />,
  );
  expect(shallowToJson(sub)).toMatchSnapshot();
});
