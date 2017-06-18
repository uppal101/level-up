import { connect } from 'react-redux';
import StudentDashboard from './dashboard';

const mapStateToProps = state => ({
  studentLoginInfo: state.studentLoginInfo,
  lvlUpInfo: state.studentPointsAndCampus,
});

export default connect(mapStateToProps)(StudentDashboard);
