import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

//import {Grid, Row, Col} from 'react-flexbox-grid';


const OrderOptionNumber = ({currentValue, limits, setOptionValue}) => (
  <div className={styles.number}>
    <input className={styles.inputSmall}
     onChange={event => setOptionValue(event.currentTarget.value)}
     type='number' value={currentValue}
     min={limits.min}
     max={limits.max}
    />


  </div>
);

OrderOptionNumber.propTypes = {

};

export default OrderOptionNumber;
