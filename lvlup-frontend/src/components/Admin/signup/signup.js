import React, { Component } from 'react';
import Email from './email';
import renderIf from 'render-if';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';
import './signupview.css';

function mapStateToProps(state, ownProps) {
  return {
    signedUp: state.signedUp,
  };
}

class AdminSignup extends Component {
  render() {
    return (
      <div>
        {renderIf(!this.props.signedUp.status)(
          <div className="signup">
            <Email />
            {this.props.signedUp.error ? <p className="errorMessage">{this.props.signedUp.error}</p> : null}
          </div>,
        )}
        {renderIf(this.props.signedUp.status)(
          <div className="signup">
            <Message>
              <Message.Header>
                Check Your Email
              </Message.Header>
              <p>
                Check your email for your lvl^ admin confirmation. If you do not see it please check your spam folder.
              </p>
            </Message>
          </div>,
        )}
      </div>

    );
  }
}

export default connect(mapStateToProps)(AdminSignup);
