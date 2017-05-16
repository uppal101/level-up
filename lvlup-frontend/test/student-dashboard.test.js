import StudentDashboard from '../src/components/Student/dashboard/dashboard-main';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('StudentDashboard should render', () => {
  const store = mockStore({ lvlupApp });
  const dash = shallow(
    <StudentDashboard store={store} />,
  );
  expect(shallowToJson(dash)).toMatchSnapshot();
});
