import React, { Component } from "react";
import axios from "axios";

export class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:90/user/login", this.state)
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem("userToken", response.data.token);
          window.location.href = "/register";
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
        <form onSubmit={this.submitLogin} id="loginForm">
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
          <input type="submit" value="Login" id="loginBtn" />
        </form>
      </div>
    );
  }
}

export default Login;
