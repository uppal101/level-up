import React from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import renderCarousel from '../helpers/render-carousel';
import './dashboard-styles.css';

const AchievementsCarousel = props => (
  <StyleRoot>
    <Coverflow
      displayQuantityOfSide={1}
      navigation
      enableScroll
      enableHeading={false}
      clickable
      active={1}
      media={{
        '@media (max-width: 800px)': {
          width: '600px',
          height: '300px',
        },
        '@media (min-width: 800px)': {
          width: '860px',
          height: '500px',
        },
      }}
    >
      {renderCarousel(props.submissions)}
    </Coverflow>
  </StyleRoot>
);

export default AchievementsCarousel;
