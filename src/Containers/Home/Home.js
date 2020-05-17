import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';

import Posts from '../Blog/Posts/Posts';
import Section from '../Section/Section';
import Coding from '../../assets/images/coding.png';
import Photography from '../../assets/images/photography.jpeg';
import ScreePrinting from '../../assets/images/screenprinting.jpg';
import GraphicDesign from '../../assets/images/graphicdesign.jpg';
import classes from './Home.module.css';

const Home = () => (
  <Fragment>
    <div className={classes.Image}>
      <div className={classes.Overlay}>
        <Fade clear>
          <img src={require('../../assets/images/profile.jpg')} alt="steve" />
          <div className={classes.Details}>
            <span className={classes.Name}>STEVE HAMM</span>
            <span className={classes.Title}>SOFTWARE DEVELOPER</span>
            <span className={classes.Title}>OWNER - BRIGHTEN APPAREL</span>
          </div>
        </Fade>
      </div>
    </div>
    <div className={classes.Home}>
    <h1>SKILLS</h1>
    <div className={classes.Sections}>
        <Link to={"/"} className={classes.SectionLink}>
          <Section title="CODING" image={Coding} />
        </Link>
        <Link to={"/"} className={classes.SectionLink}>
          <Section title="GRAPHIC DESIGN" image={GraphicDesign} />
        </Link>
        <Link to={"/"} className={classes.SectionLink}>
          <Section title="SCREEN PRINTING" image={ScreePrinting} />
        </Link>
        <Link to={"/"} className={classes.SectionLink}>
          <Section title="PHOTOGRAPHY" image={Photography} />
        </Link>
      </div> 
      <h1>RECENT BLOG POSTS</h1>
      <div className={classes.Blog}>
        <Posts home={true}/>
      </div>
    </div>
  </Fragment>
);

export default Home;