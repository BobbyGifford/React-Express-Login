import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import Navbar from './components/Navbar'
import AuthNavbar from './components/AuthNav'
class App extends Component {
  render() {

    let authNavBar = <Navbar />
    if (this.props.isAuthenticated){
      authNavBar = <AuthNavbar />
    }
    return (
      <BrowserRouter>
          {authNavBar}
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
};

export default connect(mapStateToProps)(App);
