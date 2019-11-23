import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import ReactHtmlParser from 'react-html-parser';

//import {Grid, Row, Col} from 'react-flexbox-grid';


class OrderOptionText extends React.Component {

  state = {
    error: '',
   };

   onChange = (event) => {
     const {setOptionValue} = this.props;
     setOptionValue(event.currentTarget.value);
     //console.log(event.currentTarget.value);
     let errorName;
     if(event.currentTarget.value == '') {
       errorName = '<i class="fas fa-exclamation"></i>';
     }
     else errorName = '<i style="color: green"class="far fa-check-circle"></i>';
     this.setState({
       error: errorName
     });

   }

  render(){
    const {setOptionValue, currentValue, value} = this.props;
    return (
      <div>
        <input type='text'
               //onChange={event => setOptionValue(event.currentTarget.value)}
               className={styles.input}
               onChange={event => this.onChange(event)}
        />
        <span> {ReactHtmlParser(this.state.error)}</span>
      </div>
    )
  }

};

OrderOptionText.propTypes = {

};

export default OrderOptionText;
