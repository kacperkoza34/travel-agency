import React from 'react';
import styles from './DaysToSummer.scss';
import PropTypes from 'prop-types';
import {daysToSummer} from '../../../utils/daysToSummer';


class DaysToSummer extends React.Component {

  render(){
    let titleText = ' days to summer!';
    const numberOfDays = daysToSummer(new Date());
    if(!numberOfDays) titleText = '';
    return(
      <div className={styles.component}>
        <h3 className={styles.title}>{numberOfDays}{titleText}</h3>
      </div>
    );
  }
};

DaysToSummer.propTypes = {

};

export default DaysToSummer;
