import HamburgerAdmin from '../src/components/Admin/admin-common/hamburger';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('HamburgerAdmin should render', () => {
  const store = mockStore({ lvlupApp });
  const admin = shallow(
    <HamburgerAdmin store={store} />,
  );
  expect(shallowToJson(admin)).toMatchSnapshot();
});
