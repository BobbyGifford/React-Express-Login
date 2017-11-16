import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions'

const signout = (props) => {
  const handleSignOut = () => {
    props.dispatch(actions.setUser(null))
    props.dispatch(actions.setToken(null))
    props.history.replace('/')
  }

  return (
    <div className="App">
      <h3>Are you sure?</h3>
      <button className="btn btn-info" onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    token: state.token,
    user: state.user
  }
}

export default connect(mapStateToProps)(signout)
