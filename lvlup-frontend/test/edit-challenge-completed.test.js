import EditChallengeApproved from '../src/components/Admin/admin-edit-challenge/edit-challenge-completed';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('EditChallengeApproved should render', () => {
  const store = mockStore({ lvlupApp });
  const edit = shallow(
    <EditChallengeApproved store={store} />,
  );
  expect(shallowToJson(edit)).toMatchSnapshot();
});
