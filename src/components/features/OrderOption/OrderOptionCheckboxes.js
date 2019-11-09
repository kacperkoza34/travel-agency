import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

//import {Grid, Row, Col} from 'react-flexbox-grid';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};


const OrderOptionCheckboxes = ({values, setOptionValue, currentValue}) => (
  <div className={styles.checkboxes}>
    {values.map(value => (
      <label className={styles.icon} key={value.id} >
        <input type='checkbox'
         name={value.icon}
         price={value.price}
         onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
        />
        {value.name}{` $${value.price}`}
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {

};

export default OrderOptionCheckboxes;
