import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
//import Home from './Containers/Home/Home';
import Blog from './Containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Layout>
              <Blog />
            </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
