import StudentRewardRequest from '../src/components/Student/student-reward-request/reward-request-main';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('StudentRewardRequest should render', () => {
  const store = mockStore({ lvlupApp });
  const req = shallow(
    <StudentRewardRequest store={store} />,
  );
  expect(shallowToJson(req)).toMatchSnapshot();
});
