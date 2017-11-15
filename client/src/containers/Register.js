import React, { Component } from 'react';
import '../App.css';


import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'
import AuthenicationService from '../services/AuthenticationService'


class Register extends Component {
  state = {
    email: null,
    reEmail: null,
    password: null,
    rePassword: null,
    token: null,
    user: null,
    error: null
  }
  
  submitButton = (event) => {
      AuthenicationService.register({
        email: this.state.email,
        password: this.state.password
      }).then(
        response => {
          console.log(response.data)
        }
      ).catch(error => {
        this.setState({error: error})
        console.log(error)
      })
    console.log(this.state.email)
    console.log(this.state.password)
          event.preventDefault()
          event.target.reset()
          this.props.history.push("/")

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

    let submitButton = null

    if (email === reEmail && email !== null && email.trim !== '') {
      if (password === rePassword && password !== null && password.trim !== '') {
        submitButton = <button className="btn btn-info" type="submit">Submit</button>              
      }
    }

    return (
      <div className="App">
        <form refs="form" onSubmit={this.submitButton.bind(this)}>
        <h1>Register Here</h1>

        <EmailInput label="Enter Email" changed={this.emailChanged} />
        <EmailInput label="Re-Enter Email" changed={this.reEmailChanged} />
        <PasswordInput label="Enter Password" changed={this.passwordChanged} />
        <PasswordInput label="Re-Enter Password" changed={this.rePasswordChanged} />

        {submitButton}
        </form>
    </div>
    );
  }
}

export default Register;