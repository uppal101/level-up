import StudentRewardRequest from '../src/components/Student/requests/request-main';
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
    <StudentRewardRequest reward={{ point_cost: 75 }} pts={{ currentTotal: 275 }} requestStatus={{ fulfilled: false }} store={store} />,
  );
  expect(shallowToJson(req)).toMatchSnapshot();
});
