import React from 'react'

const passwordInputs = (props) => (
  <div>
    <div className="form-group">
      <label htmlFor="password">Password:</label>
      <input type="password" className="form-control" id="password" placeholder="Enter password" required onChange={props.changed} />
    </div>

    <div className="form-group">
      <label htmlFor="rePassword">Re-Enter Password</label>
      <input type="password" className="form-control" id="rePassword" placeholder="Re-Enter password" required onChange={props.reChanged} />
    </div>

  </div>
)

export default passwordInputs