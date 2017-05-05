import LogoutStudent from '../src/components/Navbar/logout-student';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('LogoutStudent should render', () => {
  const store = mockStore({ lvlupApp });
  const logout = shallow(
    <LogoutStudent store={store} />,
  );
  expect(shallowToJson(logout)).toMatchSnapshot();
});
