import React, { Component, Fragment } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: false,
    invertedLogo: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false, invertedLogo: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState(( prevState ) => {
      return {showSideDrawer: !prevState.showSideDrawer, invertedLogo: !prevState.invertedLogo};
    });
  }

  render () {
    return (
      <Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer 
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerClosedHandler}
          invertedLogo={this.state.invertedLogo} /> 
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Fragment>
    );
  }
}

export default Layout;