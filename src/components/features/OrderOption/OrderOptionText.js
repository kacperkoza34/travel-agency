import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import ReactHtmlParser from 'react-html-parser';

//import {Grid, Row, Col} from 'react-flexbox-grid';


const OrderOptionText = ({setOptionValue, currentValue, value, validation, errorName}) => {
  return (<div>
    <input type='text'
           onChange={event => setOptionValue(event.currentTarget.value)}
           className={styles.input}
    />
    <span> {ReactHtmlParser(errorName)}</span>
  </div>
)

};

OrderOptionText.propTypes = {

};

export default OrderOptionText;
