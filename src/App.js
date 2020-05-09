import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import classes from './App.module.css'
import Layout from './hoc/Layout/Layout';
import Home from './Containers/Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
            <Layout>
              <Home />
            </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
