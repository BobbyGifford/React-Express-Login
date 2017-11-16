import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from './components/Navbar'
import AuthNavbar from './components/AuthNav'

class App extends Component {
  render () {
    let authStatus = null
    if (this.props.isAuthenticated) {
      authStatus = <AuthNavbar />
    } else {
      authStatus = <Navbar />
    }
    return (
      <BrowserRouter>
        {authStatus}
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null,
    loadingStatus: state.loading
  }
}

export default connect(mapStateToProps)(App)
