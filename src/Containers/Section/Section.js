import React from 'react';

import classes from './Section.module.css';

const Section = (props) => (
  <div className={classes.Section}>
    <p>{props.title}</p>
    <img src={props.image} alt="Skill" /> 
  </div>
);

export default Section;