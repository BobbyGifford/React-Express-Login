import React from 'react'
import { connect } from 'react-redux'

const isAuthPage = (props) => {
  let message = null
  if (props.isAuthenticated) {
    message = <div><h3>Signed in.</h3></div>
  } else {
    message = <div><h3>Not signed in</h3></div>
  }
  return (
    <div className="App">
      {message}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null,
    loadingStatus: state.loading
  }
}

export default connect(mapStateToProps)(isAuthPage)
