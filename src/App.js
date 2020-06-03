import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Notifications from 'react-notify-toast';

import Layout from './hoc/Layout/Layout';
import ScrollToTop from './components/UI/ScrollToTop/ScrollToTop';
import Home from './Containers/Home/Home';
import Blog from './Containers/Blog/Blog';
import About from './Containers/About/About';
import Contact from './Containers/Contact/Contact';
import FullPost from './Containers/Blog/FullPost/FullPost';
import Footer from './components/Navigation/Footer/Footer';
import classes from './App.module.css'
import Login from './Containers/Login/Login';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Notifications />
        <Layout>
          <ScrollToTop />
          <Switch>             
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/post/:id" component={FullPost} />
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
        <Footer />
      </div>
    );
  }
}

export default App;
