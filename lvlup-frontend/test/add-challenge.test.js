import AddChallenge from '../src/components/Admin/admin-add-challenge/add-challenge-main';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('AddChallenge should render', () => {
  const store = mockStore({ lvlupApp });
  const addchallenge = shallow(
    <AddChallenge store={store} />,
  );
  expect(shallowToJson(addchallenge)).toMatchSnapshot();
});
