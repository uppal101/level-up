import { connect } from 'react-redux';
import AchievementsCarousel from './achievements-carousel';

const mapStateToProps = state => ({
  submissions: state.submissions,
});

export default connect(mapStateToProps)(AchievementsCarousel);
