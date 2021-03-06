import React from 'react';

import LogoRegular from '../../assets/images/logo.png';
import LogoInverted from '../../assets/images/logoInverted.png';
import classes from './Logo.module.css';

const Logo = (props) => {
  const image = props.inverted ? <img src={LogoInverted} alt="Portfolio" /> : <img src={LogoRegular} alt="Portfolio" />;

  return (
    <div className={classes.Logo}>
      {image}
    </div>
  );
};

export default Logo;