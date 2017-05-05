import NavBar from '../src/components/Navbar/navbar';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('NavBar should render', () => {
  const store = mockStore({ lvlupApp });
  const nav = shallow(
    <NavBar store={store} />,
  );
  expect(shallowToJson(nav)).toMatchSnapshot();
});
