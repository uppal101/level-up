import EditChallenge from '../src/components/Admin/admin-edit-challenge/edit-challenge-main';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('EditChallenge should render', () => {
  const edit = shallow(
    <EditChallenge />,
  );
  expect(toJson(edit)).toMatchSnapshot();
});
