import React, { Component } from 'react';

import Logos from '../../assets/images/logo.png';
import LogoInverted from '../../assets/images/logoInverted.png';
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