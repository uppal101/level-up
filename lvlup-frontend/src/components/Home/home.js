import React, { Component } from 'react';
import Footer from './footer.js';
import './homeview.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="home-header">lvl^</h1>
        <div className="description">
          <p>
            Welcome to lvl^ the gamification of tasks that help you in your quest to become a better developer and advance
            your career. Students are given challenges and get a certain amount of points for completing the challenges.
            They are then able to redeem their points for rewards. The categories in both rewards and challenges should
            enrich the student's education, career search, and personal life.

            Students can sign in with GitHub OAuth in the upper right hand corner. Admins can sign up or sign in in
            the bottom right corner.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
