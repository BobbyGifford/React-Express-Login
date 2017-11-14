import React, { Component } from 'react';
import '../App.css';

import EmailInputs from '../components/EmailInputs'
import PasswordInputs from '../components/PasswordInputs'


class Register extends Component {
  state = {
    email: null,
    reEmail: null,
    password: null,
    rePassword: null,
    valid: null
  }
  
  submitButton = (event) => {
    event.preventDefault();

    let email = this.state.email
    let reEmail = this.state.reEmail

    console.log("1st Email:" + email)
    console.log("2nd Email:" + reEmail)
  }

  emailChanged = (event) => {
    let email = event.target.value
    this.setState({email: email})
  }

  reEmailChanged = (event) => {
    let email = event.target.value
    this.setState({reEmail: email})
  }

  passwordChanged = (event) => {
    let password = event.target.value
    this.setState({password: password})
  }

  rePasswordChanged = (event) => {
    let rePassword = event.target.value
    this.setState({rePassword: rePassword})
  }

  render() {

    let email = this.state.email
    let reEmail = this.state.reEmail

    let password = this.state.password
    let rePassword = this.state.rePassword

    let message = <p>Please enter a valid form</p>

    if (email === reEmail && email !== null && email.trim !== '') {
      if (password === rePassword && password !== null && password.trim !== '') {
        message = <button className="btn btn-info" type="submit">Submit</button>              
      }
    }

    return (
      <div className="App">
        <form refs="form" onSubmit={this.submitButton.bind(this)}>
        <h1>Register Here</h1>

        <EmailInputs changed={this.emailChanged} reChanged={this.reEmailChanged} />
        <PasswordInputs changed={this.passwordChanged} reChanged={this.rePasswordChanged} />

        {message}
        </form>
    </div>
    );
  }
}

export default Register;
