import AdminConfiguration from '../src/components/Admin/config/config-main';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('AdminConfiguration should render', () => {
  const config = shallow(
    <AdminConfiguration />,
  );
  expect(toJson(config)).toMatchSnapshot();
});
