import React from 'react'

import { Route, NavLink } from 'react-router-dom'

import IsAuthPage from './IsAuthPage'
import AuthGreeting from './AuthGreeting'
import SignOut from './SignOut'

// edit this page for auth users

const navbar = () => (
  <div>
    <nav className="navbar navbar-toggleable-md navbar-light">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <NavLink className="navbar-brand" to="/">User Status</NavLink>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/greeting">User Message</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/signout">Sign Out</NavLink>
          </li>
        </ul>
      </div>

    </nav>
    <Route path="/" exact component={IsAuthPage}/>
    <Route path='/greeting' component={AuthGreeting} />
    <Route path="/signout" component={SignOut} />
  </div>
)

export default navbar
