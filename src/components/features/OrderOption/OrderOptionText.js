import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

//import {Grid, Row, Col} from 'react-flexbox-grid';


const OrderOptionText = ({setOptionValue, currentValue, value}) => (
  <div>
    <input type='text'
           onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

OrderOptionText.propTypes = {

};

export default OrderOptionText;
