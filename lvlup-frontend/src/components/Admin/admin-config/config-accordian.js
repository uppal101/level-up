import _ from 'lodash';
import faker from 'faker';
import React from 'react';
import { Accordion } from 'semantic-ui-react';

const campuses = _.times(8, () => ({
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs(),
}));

const AccordionExampleStyled = () => (
  <Accordion panels={panels} exclusive={false} fluid />
);

export default AccordionExampleStyled;
