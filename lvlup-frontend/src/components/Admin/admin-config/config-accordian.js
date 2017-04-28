import _ from 'lodash';
import React from 'react';
import { Accordion } from 'semantic-ui-react';

// const arrayOfCampuses = ['San Francisco', 'Austin', 'Seattle'];
const campuses = _.times(3, arrayOfCampuses => ({
  title: arrayOfCampuses,
}));

const AccordionExampleStyled = () => (
  <Accordion panels={campuses} exclusive={false} fluid />
);

export default AccordionExampleStyled;

// import _ from 'lodash'
// import faker from 'faker'
// import React from 'react'
// import { Accordion } from 'semantic-ui-react'
//
// const panels = _.times(3, () => ({
//   title: faker.lorem.sentence(),
//   content: faker.lorem.paragraphs(),
// }))
//
// const AccordionExampleExclusive = () => (
//   <Accordion panels={panels} exclusive={false} fluid />
// )
//
// export default AccordionExampleExclusive
