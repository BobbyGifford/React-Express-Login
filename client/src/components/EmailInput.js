import React from 'react'

const emailInput = (props) => (
  <div>
    <div className="form-group">        
      <label htmlFor="emailInput">{props.label}</label>
      <input type="email" className="form-control" id="emailInput" placeholder={props.label} required onChange={props.changed}/>
    </div>
  </div>
)

export default emailInput