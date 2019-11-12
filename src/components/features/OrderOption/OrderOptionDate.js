import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';



class OrderOptionDate extends React.Component {

  state = {
    startDate: new Date(),
   };

   onSelect = date => {
     const {setOptionValue} = this.props;
     this.setState({
       startDate: date
     });
    setOptionValue(date);
   }

 render() {
   const {setOptionValue} = this.props;

   return (
       <DatePicker
         selected={this.state.startDate}
         onSelect={this.onSelect}
       />
   );
 }
}

OrderOptionDate.propTypes = {

};

export default OrderOptionDate;
