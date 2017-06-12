import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import AdminSignUp from '../src/components/Admin/signup/signup';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('adminsignup should render', () => {
  const store = mockStore({ lvlupApp });
  const adminsignup = shallow(
    <AdminSignUp store={store} />,
  );
  expect(shallowToJson(adminsignup)).toMatchSnapshot();
});
