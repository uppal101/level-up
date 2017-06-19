import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Footer from './footer';
import RecruiterModal from './recruiter-modal';
import Technologies from './technologies';
import Team from './team';
import About from './about';
import './homeview.css';

const Home = () => (
  <div>
    <Grid>
      <Grid.Row centered width={16}>
        <h1 className="home-header">live.work.grow.lvl^</h1>
      </Grid.Row>
    </Grid>
    <Grid padded id="landing-grid">
      <Grid.Row id="intro-row">
        <div id="intro-text">
          <u>The Mission:</u> lvl^ was built to be an education enrichment platform for students currently enrolled in one of the full time immersive programs offered at any of Galvanize’s seven nationwide campuses.  The platform provides a gamification of tasks aimed to contribute to student’s growth in their journey to become a professional in the tech industry.  Students are provided with challenges which fall into four categories of growth: education, career, community and life/wellness.  Administrators are able to review and approve or deny student challenge submissions which upon approval will award the student with points.  Students may then cash in accumulated points for relevant rewards which fall into one of the four categories of growth.  Step up your game and lvl^!
            </div>
      </Grid.Row>
      <Grid.Row centered id="intro-row">
        <div className="demo-section1">
          <RecruiterModal />
        </div>
      </Grid.Row>
      <Grid.Row id="challenge-solution">
        <Grid.Column textAlign="center" width={8} id="challenge-column">
          <Segment raised id="challenge-segment">
            <u>The Challenge:</u> Making the decision to enroll in an immersive program is no small thing, it’s a huge commitment.  Many students start with little to no programming experience, or experience that results from self learning.  Often times students have decided to take the plunge and make a complete career change.  Making the actual decision to enroll, however, is only the beginning.  The road ahead provides a great number more challenges.  The path is not easy.  Success comes from a great deal of hard work and perseverance.  While completing the requirements of the program is a great start there are many ways a student can not only gain more from the experience, but also put themselves in a better position to be successful when the program concludes.
              </Segment>

        </Grid.Column>
        <Grid.Column textAlign="center" width={8} id="solution-column">
          <Segment raised id="solution-segment">
            <u>The Goal:</u> The aim of the lvl^ platform is to provide students with a number of challenges which will supplement the student’s growth throughout the program.  The lvl^ team worked closely with Galvanize career services and student success managers to develop a set of challenges that we feel as both students and administrators will contribute to that end and place students in an even better position for success beyond the program.  By providing a gamified platform and a series of rewards for which the students may cash in earned points we hope to make this a more fun and engaging experience.  While some of the rewards offered are for pure enjoyment and others aim specifically to help students succeed...all rewards aim to level you up!
            </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Technologies />
      </Grid.Row>
      <Grid.Row id="about-section">
        <About />
      </Grid.Row>
      <Grid.Row centered columns={3} id="about-row">
        <Team />
      </Grid.Row>
      <Grid.Row centered>
        <div className="demo-section2">
          <RecruiterModal />
        </div>
      </Grid.Row>
    </Grid>
    <Footer />
  </div>
);

export default Home;
