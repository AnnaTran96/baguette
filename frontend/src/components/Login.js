import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

class Login extends Component {
  state = { username: "", password: "" };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ Password: "" });

    let LogIn = {
      username: this.state.username,
      password: this.state.password,
    };
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json", 'Authorization': "Token" },
      body: JSON.stringify(LogIn),
    };
    console.log(options);

    fetch("http://localhost:8000/token-auth/", options)
      .then((res) => res.json())
      .then((data) => {
        if (
          data.non_field_errors == "Unable to log in with provided credentials."
        ) {
          alert("Incorrect Username or Password. Please try again");
          this.setState({password: ""})
        } else {
          localStorage.setItem("token", data.token);
          this.props.history.push('/home')
        }
      })

      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="login-container">
        <div className="loginPageContainer">
          <h3>Returning Customer? Log in below</h3>
          <div className="loginFormContainer">
            <form autoComplete="disabled" onSubmit={this.handleFormSubmit}>
                <label htmlFor="Username">Username</label>
                <input
                    required
                    autoComplete="disabled"
                    className="formInput"
                    type="text"
                    name="username"
                    placeholder="username"
                    onChange={this.handleInput}
                />
                <br />
                <label htmlFor="password">Password</label>
                <input
                    required
                    className="formInput"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleInput}
                />
                <br />
                <input type="submit" value="Login" className="loginBtn" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login)