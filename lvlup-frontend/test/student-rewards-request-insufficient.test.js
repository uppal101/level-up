import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import RequestInsufficient from '../src/components/Student/requests/request-insufficient-points';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('RequestInsufficient should render', () => {
  const store = mockStore({ lvlupApp });
  const req = shallow(
    <RequestInsufficient store={store} />,
  );
  expect(shallowToJson(req)).toMatchSnapshot();
});
