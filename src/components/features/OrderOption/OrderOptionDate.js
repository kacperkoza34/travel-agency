import React from 'react';
//import styles from './OrderForm.scss';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import styles from './OrderOption.scss';

import PropTypes from 'prop-types';

import pricing from '../../../data/pricing.json';




class OrderOptionDate extends React.Component {

  state = {
     startDate: new Date()
   };

   handleChange = ( date ) => {
     this.setState({
       startDate: date
     });
   };
   onSelect = date => {
     console.log(date);
   }

 render() {
   const {setOptionValue} = this.props;

   return (
       <DatePicker
         selected={this.state.startDate}
         //onChange={event => console.log(this.handleChange)}
         onChange={this.handleChange}
         onSelect={event => setOptionValue(this.state.startDate)}

       />
   );
 }
}

OrderOptionDate.propTypes = {

};

export default OrderOptionDate;
