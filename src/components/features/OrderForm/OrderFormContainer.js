import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';
import { withRouter } from "react-router";

const mapStateToProps = (state, props) => {
  const options = getOrderOptions(state, props);
  
  return {
    options,
  };
};

const mapDispatchToProps = dispatch => ({
    setOrderOption: option => dispatch(setOrderOption(option)),
  });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderForm));
