import React from 'react';
import styles from './OrderOption.scss';

import PropTypes from 'prop-types';


import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionDate from './OrderOptionDate';
import OrderOptionText from './OrderOptionText';


//import {Grid, Row, Col} from 'react-flexbox-grid';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  date: OrderOptionDate,
  text: OrderOptionText,
};

const OrderOption = ({name, type, id, setOrderOption, validation, ...otherProps}) => {
  let errorName = '<i style="color: green"class="far fa-check-circle"></i>';
  if(id === 'name' && validation.name.length == 0){
    errorName = '<i class="fas fa-exclamation"></i>';
  }
  else if(id === 'contact' && validation.contact.length == 0){
    errorName = '<i class="fas fa-exclamation"></i>';
  }
  else if(validation.startDate !== null ){
    if(id === 'startDate' && validation.startDate.length == 0){
      errorName = '<i class="fas fa-exclamation"></i>';
    }
  }
  else validation.startDate = '';




  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          setOptionValue={value => setOrderOption({[id]: value})}
          {...otherProps}
          errorName={errorName}
        />
      </div>
    );
  }
};

OrderOption.propTypes = {

};

export default OrderOption;
