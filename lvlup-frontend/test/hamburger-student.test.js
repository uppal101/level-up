import StudentSidenav from '../src/components/Student/nav/sidenav';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('StudentSidenav should render', () => {
  const store = mockStore({ lvlupApp });
  const student = shallow(
    <StudentSidenav store={store} />,
  );
  expect(shallowToJson(student)).toMatchSnapshot();
});
