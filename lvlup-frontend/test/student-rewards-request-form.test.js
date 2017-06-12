import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';
import StudentRewardRequestForm from '../src/components/Student/requests/request-form';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('StudentRewardRequestForm should render', () => {
  const store = mockStore({ lvlupApp });
  const req = shallow(
    <StudentRewardRequestForm store={store} />,
  );
  expect(shallowToJson(req)).toMatchSnapshot();
});
