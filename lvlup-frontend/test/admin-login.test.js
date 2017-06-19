import AdminLogin from '../src/components/Admin/login/login';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('AdminLogin should render', () => {
  const store = mockStore({ lvlupApp });
  const edit = shallow(
    <AdminLogin adminLoginInfo={{ status: false }} store={store} />,
  );
  expect(shallowToJson(edit)).toMatchSnapshot();
});
