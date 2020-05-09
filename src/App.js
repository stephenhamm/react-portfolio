import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import classes from './App.module.css'
import Layout from './hoc/Layout/Layout';
import Home from './Containers/Home/Home';
import Blog from './Containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
          <Layout>
            <Switch>
              <Route path="/blog" component={Blog} />
              <Route path="/" exact component={Home} />
            </Switch>
          </Layout>
      </div>
    );
  }
}

export default App;
