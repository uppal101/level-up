import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import SubissionCompleted from '../src/components/Student/submissions/submission-completed';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('SubissionCompleted should render', () => {
  const store = mockStore({ lvlupApp });
  const sub = shallow(
    <SubissionCompleted store={store} />,
  );
  expect(shallowToJson(sub)).toMatchSnapshot();
});
