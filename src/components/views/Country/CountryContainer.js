import {connect} from 'react-redux';
import Country from './Country';
import { getCountryByCode } from '../../../redux/countriesRedux';
import { getTripsForCountry } from '../../../redux/tripsRedux';
import {withRouter} from 'react-router';

const mapStateToProps = (state, props) => {
  //console.log(state);
  const country = getCountryByCode(state, props.match.params.id);
  const trips = getTripsForCountry(state, country.alpha3Code);

  return {
    ...country,
    trips,
  };
};

export default withRouter(connect(mapStateToProps)(Country));
