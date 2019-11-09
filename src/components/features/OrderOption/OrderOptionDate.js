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
   //console.log(this.state.startDate);
   //const listner = arg => setOptionValue(arg);
   //listner(this.state);
   return (
       <DatePicker
         selected={this.state.startDate}
         onSelect={this.state.inputValue}
        // onChange={event => setOptionValue(this.state.startDate)}
         onChange={this.handleChange}
       />
   );
 }
}

OrderOptionDate.propTypes = {

};

export default OrderOptionDate;
