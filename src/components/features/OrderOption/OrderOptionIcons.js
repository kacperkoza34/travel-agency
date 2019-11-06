import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon'
//import {Grid, Row, Col} from 'react-flexbox-grid';


class OrderOptionIcons extends React.Component {

    render(){
      const {values, setOptionValue, required } = this.props;
      //setOptionValue('hotel');
      //console.log(values[0].id);
      return(
        <div className={styles.component}>
          {values.map(value => (
            <div className={styles.icon} key={value.id} >
              <Icon  name={value.icon} price={value.price} onClick={value => setOptionValue(value.id)} ></Icon>
            </div>
          ))}
        </div>
      );
    }
}

OrderOptionIcons.propTypes = {

};

export default OrderOptionIcons;
