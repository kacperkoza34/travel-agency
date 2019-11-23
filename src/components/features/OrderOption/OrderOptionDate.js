import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import ReactHtmlParser from 'react-html-parser';



class OrderOptionDate extends React.Component {

  state = {
    startDate: '',
    error: '',
   };

   onSelect = date => {
     const {setOptionValue} = this.props;
     this.setState({
       startDate: date
     });
    setOptionValue(date);
   }

   onChange = (event) => {
     const {setOptionValue} = this.props;
     console.log(event);
     let errorName;
     if(event == null) {
       errorName = '<i class="fas fa-exclamation"></i>';
       setOptionValue('');
     }
     else errorName = '<i style="color: green"class="far fa-check-circle"></i>';
     this.setState({
       error: errorName
     });

   }

 render() {
   const {setOptionValue} = this.props;

   return (
     <div>
       <DatePicker
         selected={this.state.startDate}
         onSelect={this.onSelect}
         onChange={event => this.onChange(event)}
         minDate={new Date()}
       />
       <span> {ReactHtmlParser(this.state.error)}</span>
      </div>
   );
 }
}

OrderOptionDate.propTypes = {

};

export default OrderOptionDate;
