import React from 'react';
import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';

import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';

import pricing from '../../../data/pricing.json';


const OrderForm = ({tripCost, options, setOrderOption}) => (
  <Row>
      {pricing.map(el => (
        <Col md={4} key={el.id}>
          <OrderOption setOrderOption={setOrderOption} currentValue={options[el.id]} key={el.id} {...el} />
        </Col>
      ))
      }

    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {

};

export default OrderForm;
