import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import ReactHtmlParser from 'react-html-parser';



class OrderOptionDate extends React.Component {

  state = {
    startDate: '',
   };

   onSelect = date => {
     const {setOptionValue} = this.props;
     this.setState({
       startDate: date
     });
    setOptionValue(date);
   }

 render() {
   const {setOptionValue, errorName} = this.props;

   return (
     <div>
       <DatePicker
         selected={this.state.startDate}
         onSelect={this.onSelect}
         minDate={new Date()}

       />
       <span> {ReactHtmlParser(errorName)}</span>
      </div>
   );
 }
}

OrderOptionDate.propTypes = {

};

export default OrderOptionDate;
