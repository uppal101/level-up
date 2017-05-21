import ConfigurationAccordian from '../src/components/Admin/admin-config/config-accordian';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('ConfigurationAccordian should render', () => {
  const config = shallow(
    <ConfigurationAccordian />,
  );
  expect(toJson(config)).toMatchSnapshot();
});
