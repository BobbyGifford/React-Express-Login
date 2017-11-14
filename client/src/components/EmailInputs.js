import React from 'react'

const emailInputs = (props) => (
  <div>
    <div className="form-group">        
      <label htmlFor="emailInput">Email:</label>
      <input type="email" className="form-control" id="emailInput" placeholder="Enter email here" required onChange={props.changed}/>
    </div>

    <div className="form-group">
      <label htmlFor="reEmailInput">Re-Enter Email:</label>
      <input type="email" className="form-control" id="reEmailInput" placeholder="Re-enter email" required onChange={props.reChanged} />
    </div>
  </div>
)

export default emailInputs