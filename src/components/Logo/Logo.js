import React from 'react';

import LogoRegular from '../../assets/images/weblogo.png';
import LogoInverted from '../../assets/images/weblogoinverted.png';
import classes from './Logo.module.css';

const Logo = ( props ) => {
  const image = props.inverted ? <img src={LogoInverted} alt="Portfolio" /> : <img src={LogoRegular} alt="Portfolio" />;

  return (
    <div className={classes.Logo}>
      {image}
    </div>
  );
};

export default Logo;