import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon'
//import {Grid, Row, Col} from 'react-flexbox-grid';


class OrderOptionIcons extends React.Component {

    render(){
      const {values, setOptionValue, required, currentValue } = this.props;
      return(
        <div className={styles.component}>
          {values.map(value => {
            let activeElement = styles.icon;
            if(value.id == currentValue ){activeElement = styles.iconActive };
            return(<div key={value.id} className={activeElement} >
              <Icon
                name={value.icon}
                price={value.price}
                title={value.name}
                addOption={event => setOptionValue(value.id)}
              />
            </div>)
          })}
        </div>
      );
    }
}

OrderOptionIcons.propTypes = {

};

export default OrderOptionIcons;
