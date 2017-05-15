import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AdminSignUp from '../src/components/Admin/signup/signup';

test('adminsignup should render', () => {
  const adminsignup = shallow(
    <AdminSignUp />,
  );
  expect(toJson(adminsignup)).toMatchSnapshot();
});
