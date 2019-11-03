import React from 'react';
import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary';

import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';


const OrderForm = ({tripCost, options}) => (
  <Row>
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {

};

export default OrderForm;
