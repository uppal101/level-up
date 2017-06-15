import moment from 'moment';

export const formatDate = time => moment(time).format('MM/DD/YYYY');
