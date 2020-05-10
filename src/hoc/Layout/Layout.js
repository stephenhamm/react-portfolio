import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

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
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer 
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerClosedHandler}
          invertedLogo={this.state.invertedLogo} /> 
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;