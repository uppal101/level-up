import React, { Component } from 'react';
import AddACohortForm from './config-add-cohort-form';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import AddCohortComplete from './add-cohort-confirmed';

const mapStateToProps = state => ({
  addCohort: state.addedCohort,
});

class AddCohortPage extends Component {
  render() {
    return (
      <div className="admin-config">
        {renderIf(this.props.addCohort.fulfilled === false)(<AddACohortForm />)}
        {renderIf(this.props.addCohort.fulfilled === true)(<AddCohortComplete />)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(AddCohortPage);
