import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RewardsEarned from './rewards-earned';
import {
  sortRewardsAsc,
  sortRewardsDesc,
} from '../../../actions/sort-actions';
import {
  sortRewardsChrono,
  sortRewardsRevChrono,
} from '../../../actions/sort-date-actions';


const mapStateToProps = state => ({
  requests: state.requests.requests,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  sortRewardsAsc,
  sortRewardsDesc,
  sortRewardsChrono,
  sortRewardsRevChrono,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RewardsEarned);
