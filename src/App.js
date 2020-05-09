import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import classes from './App.module.css'
import Layout from './hoc/Layout/Layout';
import Home from './Containers/Home/Home';
import Blog from './Containers/Blog/Blog';
import About from './Containers/About/About';
import Contact from './Containers/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
          <Layout>
            <Switch>
              <Route path="/blog" component={Blog} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/" exact component={Home} />
            </Switch>
          </Layout>
      </div>
    );
  }
}

export default App;
