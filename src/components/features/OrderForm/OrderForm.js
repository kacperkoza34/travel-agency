import React from 'react';
import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button'
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';

import pricing from '../../../data/pricing.json';

import settings from '../../../data/settings';



const sendOrder = (options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));
  const payload = {
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };
  if(options.contact != '' && options.name != '' && options.startDate != null && options.startDate != ''){
    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
        window.alert('Your reservation is confirmed');
        location.reload();

      });
  }
   else window.alert('Please fill all fields');
};


const OrderForm = ({tripCost, options, setOrderOption}) => (
  <Row className={styles.component}>
        {pricing.map(el => (
          <Col md={4} key={el.id}>
            <OrderOption setOrderOption={setOrderOption} validation={options} currentValue={options[el.id]} key={el.id} {...el} />
          </Col>
        ))
        }

      <Col xs={12}>
        <OrderSummary cost={tripCost} options={options}/>
      </Col>

      <Button onClick={() => sendOrder(options, tripCost)}>Order now!</Button>

  </Row>
);

OrderForm.propTypes = {

};

export default OrderForm;
