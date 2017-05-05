import AdminHome from '../src/components/Admin/admin-main-view/admin-main';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('AdminHome should render', () => {
  const adminhome = shallow(
    <AdminHome />,
  );
  expect(toJson(adminhome)).toMatchSnapshot();
});
