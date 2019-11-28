import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';
import {formatTime} from '../../../utils/formatTime';


//import {Grid, Row, Col} from 'react-flexbox-grid';


class HappyHourAd extends React.Component {
  constructor(){
    super();

    setInterval(() => ( this.forceUpdate()), 1000);

  }
  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  };
  render(){

    //let currentDate = new Date();
    //let currentHour = currentDate.getHours();
    let description = formatTime(this.getCountdownTime());

    if(this.getCountdownTime() <= 86400 && this.getCountdownTime() >= 82801 ) description = 'The best time to choose trip';

    return(
      <div className={styles.component}>
        <h3 className={styles.title}>Happy Hour</h3>
        <div className={styles.promoDescription}>{description}</div>
      </div>);
  }
};

HappyHourAd.propTypes = {

};

export default HappyHourAd;
