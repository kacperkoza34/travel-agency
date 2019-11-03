import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';

import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';


class OrderSummary extends React.Component {

  render(){
    //console.log(this.props);
    const {cost, options} = this.props;
    const calcCost = calculateTotal(formatPrice(cost),options);
    return(
      <h2 className={styles.component}>Total:<strong>{calcCost}</strong></h2>
    );
  }
}

export default OrderSummary;
