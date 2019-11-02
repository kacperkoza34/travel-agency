import {connect} from 'react-redux';
import Trip from './Trip';
import {getTripById} from '../../../redux/tripsRedux';
import {getCountryByCode} from '../../../redux/countriesRedux';
import {withRouter} from 'react-router';


const mapStateToProps = (state, props) => {
  //console.log(state);
  //console.log(props.match.url.slice(6));

  const trip = getTripById(state, props.match.url.slice(6));
  //console.log('triop do flagi: ', trip);
  const country = getCountryByCode(state, trip[0].country.code);
  return {
    ...trip[0],
    country,
  };
};

export default withRouter(connect(mapStateToProps)(Trip));
