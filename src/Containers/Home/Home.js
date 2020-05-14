import React from 'react';
import { Link } from 'react-router-dom';

import Posts from '../Blog/Posts/Posts';
import Section from '../Section/Section';
import Coding from '../../assets/images/coding.png';
import Photography from '../../assets/images/photography.jpeg';
import ScreePrinting from '../../assets/images/screenprinting1.png';
import GraphicDesign from '../../assets/images/graphicdesign.jpg';
import classes from './Home.module.css';

const Home = () => (
  <div className={classes.Home}>
    <h1>RECENT BLOG POSTS</h1>
    <div className={classes.Blog}>
      <Posts home={true}/>
    </div>
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
  </div>
);

export default Home;