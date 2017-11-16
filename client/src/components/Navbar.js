import React from 'react'

import { Route, NavLink } from 'react-router-dom'

import Register from '.././containers/Register'
import Login from '.././containers/Login'
import IsAuthPage from './IsAuthPage'

const authNavbar = () => (
  <div>
    <nav className="navbar navbar-toggleable-md navbar-light">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <NavLink className="navbar-brand" to="/">User Status</NavLink>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">Register</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
        </ul>
      </div>

    </nav>
    <Route path="/" exact component={IsAuthPage}/>
    <Route path="/register" component={Register}/>
    <Route path="/login" component={Login} />
  </div>
)

export default authNavbar
