import React, { Component } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import './Home/homeview.css';
// import { logIn } from '../../actions/actions';
// import { Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

// const mapDispatchToProps = dispatch => bindActionCreators({ logIn }, dispatch);


class NavBar extends Component {
  render() {
    return (
      <Menu size="massive" className="nav">
        <Menu.Item className="left" header><div className="name">lvl^</div></Menu.Item>
        <Menu.Item className="right">
          {/* <Link to={'dashboard/student'}> */}
          <a href={'http://localhost:3000/api/auth/github/'}>
            <Button color="orange">
              {/* <Button color="grey" onClick={() => this.props.logIn()}> */}
              <Icon name="github" /> Log In or Sign Up with Github
            </Button>
          </a>
          {/* </Link> */}
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;
// export default connect(null, mapDispatchToProps)(NavBar);
