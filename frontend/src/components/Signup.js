import React, { Component } from "react";

class Signup extends Component {
  state = { username: "", email: "", password: "", passwordTwo: "" };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    let userData;
    e.preventDefault();
    if (this.state.password === this.state.passwordTwo) {
      userData = {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      };
      const options = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(userData),
      };

      fetch("http://localhost:8000/users/", options)
        .then((res) => res.json())
        .then((data) => {
          if (
            data.username[0] === "A user with that username already exists."
          ) {
            alert("A user with that username already exists. Please use a different username");
          } else {
            alert("You have signed up successfully")
            }
          }
        );
    } else {
      alert("Passwords do not match");
    }
  };

  render() {
    return (
      <>
        <div className="signup-container">
       
         
        
          <div className="signupForm">
            <h3>New User? Register Below</h3>
            <form onSubmit={this.handleFormSubmit}>
            <label htmlFor="username">Username</label>
                <input
                    className="formInput"
                    required
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleInput}
                    maxLength="20"
                />
                <br />
                <label htmlFor="email">Email</label>
                <input
                    className="formInput"
                    required
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={this.state.email}
                    onChange={this.handleInput}
                />
                <br />
                <label htmlFor="Password">Password</label>
                <input
                    className="formInput"
                    required
                    type="password"
                    name="password"
                    minLength="6"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInput}
                />
                <span>Minimum of 6 Characters</span>
                <br />
                <label htmlFor="Password">Confirm Password</label>
                <input
                    className="formInput"
                    required
                    type="password"
                    name="passwordTwo"
                    minLength="6"
                    placeholder="Confirm Password"
                    value={this.state.passwordTwo}
                    onChange={this.handleInput}
                />
                <br />
                <input
                    className="signupBtn"
                    type="submit"
                    value="Register"
                />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Signup