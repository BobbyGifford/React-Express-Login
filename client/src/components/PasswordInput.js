import React from 'react'

const passwordInput = (props) => (
  <div>
    <div className="form-group">
      <label htmlFor="password">{props.label}</label>
      <input type="password" className="form-control" id="password" placeholder={props.label} required onChange={props.changed} />
    </div>
  </div>
)

export default passwordInput