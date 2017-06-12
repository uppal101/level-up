import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import AdminConfiguration from '../src/components/Admin/config/config-main';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('AdminConfiguration should render', () => {
  const store = mockStore({ lvlupApp });
  const config = shallow(
    <AdminConfiguration store={store} />,
  );
  expect(shallowToJson(config)).toMatchSnapshot();
});
