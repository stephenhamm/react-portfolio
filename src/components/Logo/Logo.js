import React, { Component } from 'react';

import Logos from '../../assets/images/weblogo.png';
import LogoInverted from '../../assets/images/weblogoinverted.png';
import classes from './Logo.module.css';

class Logo extends Component {
  render () {
    const image = this.props.inverted ? <img src={LogoInverted} alt="Portfolio" /> : <img src={Logos} alt="Portfolio" /> ;

    return (
      <div className={classes.Logo}>
        {image}
      </div>
    );
  }
}

export default Logo;