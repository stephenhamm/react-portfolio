import React, { Component } from 'react';

import classes from './Section.module.css';

class Section extends Component {
  render () {
    return (
      <div className={classes.Section}>
        <p>{this.props.title}</p>
        <img src={this.props.image} alt="Skill" />
      </div>
    );
  }
}

export default Section;