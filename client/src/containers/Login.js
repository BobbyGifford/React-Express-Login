import React, { Component } from 'react';
import '../App.css';

import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'
import AuthenicationService from '../services/AuthenticationService'
import { connect } from 'react-redux';

import * as actions from '../store/actions'

class Login extends Component {
  state = {
    email: null,
    password: null,
    user: null,
    token: null
  }

  componentDidMount(){
    console.log(this.props.token)
    console.log(this.props.user)
  }

  submitButton = (event) => {
    AuthenicationService.login({
      email: this.state.email,
      password: this.state.password
    }).then(
      response => {
        this.props.dispatch(actions.setUser(response.data.user))
        this.props.dispatch(actions.setToken(response.data.token))
      }
    ).catch(error => {
      console.log(error)
    })
    event.preventDefault()
    event.target.reset()
    this.props.history.push("/")
  }

  emailChanged = (event) => {
    let email = event.target.value
    this.setState({email: email})
  }

  passwordChanged = (event) => {
    let password = event.target.value
    this.setState({password: password})
  }

  render() {
    return (
      <div className="App">
        <form refs="form" onSubmit={this.submitButton.bind(this)}>
        <h1>Log In Here</h1>
        <EmailInput label="Enter Email" changed={this.emailChanged} />
        <PasswordInput label="Enter Password" changed={this.passwordChanged} />
        <button type="submit" className="btn btn-info">Submit</button>
        </form>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    token: state.token
  };
};

export default connect(mapStateToProps)(Login);
