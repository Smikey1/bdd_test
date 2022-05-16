import React, { Component } from "react";
import axios from "axios";

export class Register extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    verifyPassword: "",
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:90/user/registration", this.state)
      .then((response) => {
        if (response.data.success) {
          window.location.href = "/";
        } else {
          alert(response.data.message);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitRegister} id="registerForm">
          <label for="firstName">First Name:</label>
          <br></br>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={this.state.firstName}
            onChange={this.changeHandler}
          />
          <br></br>
          <label for="lastName">Last Name:</label>
          <br></br>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={this.state.lastName}
            onChange={this.changeHandler}
          />
          <br></br>
          <label for="address">Addresss:</label>
          <br></br>
          <input
            type="text"
            id="address"
            name="address"
            value={this.state.address}
            onChange={this.changeHandler}
          />
          <br></br>
          <label for="email">Email:</label>
          <br></br>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.changeHandler}
          />
          <br></br>
          <label for="password">Password:</label>
          <br></br>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <br></br>
          <label for="verifyPassword">Verify Password:</label>
          <br></br>
          <input
            type="password"
            id="verifyPassword"
            name="verifyPassword"
            value={this.state.verifyPassword}
            onChange={this.changeHandler}
          />
          <br></br>
          <input type="submit" value="Register" id="registerBtn" />
        </form>
      </div>
    );
  }
}

export default Register;
