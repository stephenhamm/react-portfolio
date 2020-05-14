import React from 'react';

import classes from './Section.module.css';

const Section = (props) => (
  <div className={classes.Section}>
    <div className={classes.Title}>{props.title}</div>
    <img src={props.image} alt="Skill" className={classes.Image}/> 
    <div className={classes.Middle}>
    <div className={classes.Text}>VIEW MORE</div>
    </div>
  </div>
);

export default Section;