import LogoutAdmin from '../src/components/Navbar/logout-admin';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('LogoutAdmin should render', () => {
  const store = mockStore({ lvlupApp });
  const logout = shallow(
    <LogoutAdmin store={store} />,
  );
  expect(shallowToJson(logout)).toMatchSnapshot();
});
