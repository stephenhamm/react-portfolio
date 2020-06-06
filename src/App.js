import React from 'react';
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
import Admin from './Containers/Admin/Admin';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
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
            <PrivateRoute path="/admin" component={Admin} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
