import HamburgerStudent from '../src/components/Student/student-main-view/hamburger';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('HamburgerStudent should render', () => {
  const store = mockStore({ lvlupApp });
  const student = shallow(
    <HamburgerStudent store={store} />,
  );
  expect(shallowToJson(student)).toMatchSnapshot();
});
