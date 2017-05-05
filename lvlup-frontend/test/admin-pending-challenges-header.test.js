import Header from '../src/components/Admin/admin-main-view/pending-challenges/header';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('Header should render', () => {
  const store = mockStore({ lvlupApp });
  const approveChallenge = shallow(
    <Header store={store} />,
  );
  expect(shallowToJson(approveChallenge)).toMatchSnapshot();
});
