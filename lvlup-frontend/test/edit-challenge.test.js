import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import EditChallenge from '../src/components/Admin/challenges/edit-challenge/edit-challenge-main';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('EditChallenge should render', () => {
  const store = mockStore({ lvlupApp });
  const edit = shallow(
    <EditChallenge store={store} />,
  );
  expect(shallowToJson(edit)).toMatchSnapshot();
});
