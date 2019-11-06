import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';

const mapStateToProps = (state, props) => {
  //console.log(state);
  const options = getOrderOptions(state);

  return {
    options,
  };
};

const mapDispatchToProps = dispatch => ({
    setOrderOption: option => dispatch(setOrderOption(option)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
