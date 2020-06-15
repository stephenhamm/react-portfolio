import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';

import Posts from '../Blog/Posts/Posts';
import Section from '../../components/Section/Section';
import Coding from '../../assets/images/coding.jpg';
import CodingIcon from '../../assets/images/icons/codingIcon.png';
import GraphicDesignIcon from '../../assets/images/icons/graphicDesignIcon.png';
import PhotographyIcon from '../../assets/images/icons/photographyIcon.png';
import ScreenPrintingIcon from '../../assets/images/icons/screenPrintingIcon.png'
import Photography from '../../assets/images/photography.jpeg';
import ScreePrinting from '../../assets/images/screenPrinting.jpg';
import GraphicDesign from '../../assets/images/graphicDesign.png';
import classes from './Home.module.css';

const Home = () => (
  <Fragment>
    <div className={classes.Image}>
      <div className={classes.Overlay}>
        <Fade clear>
          <div>
            <img src={require('../../assets/images/profile.jpg')} alt="steve" />
          </div>
          <div className={classes.Details}>
            <span className={classes.Name}>STEVE HAMM</span>
            <span className={classes.Title}>SOFTWARE DEVELOPER</span>
            <span className={classes.Title}>OWNER - BRIGHTEN APPAREL</span>
          </div>
        </Fade>
      </div>
    </div>
    <div className={classes.Home}>
      <h1 className={classes.ContainerTitle}>SKILLS</h1>
      <Fade>
        <div className={classes.Sections}>
          <Link to={"/"} className={classes.SectionLink}>
            <Section title="WEB DEVELOPMENT" image={Coding} icon={CodingIcon} />
          </Link>
          <Link to={"/"} className={classes.SectionLink}>
            <Section title="GRAPHIC DESIGN" image={GraphicDesign}  icon={GraphicDesignIcon}/>
          </Link>
          <Link to={"/"} className={classes.SectionLink}>
            <Section title="SCREEN PRINTING" image={ScreePrinting} icon={ScreenPrintingIcon} />
          </Link>
          <Link to={"/"} className={classes.SectionLink}>
            <Section title="PHOTOGRAPHY" image={Photography} icon={PhotographyIcon} />
          </Link>
        </div> 
      </Fade>
      <h1 className={classes.ContainerTitle}>RECENT BLOG POSTS</h1>
      <div className={classes.Blog}>
        <Posts home={true}/>
      </div>
    </div>
  </Fragment>
);

export default Home;