import React, { Component } from "react";

class User extends Component {
  state = {
    username: "null",
  };
  componentDidMount() {
    fetch("http://localhost:8000/current_user/", {
      headers: {
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({ username: json.username });
      });
  }

  render() {
    return (
      <div className="user-container">
        <h4>Welcome {this.state.username}!</h4>
      </div>
    );
  }
}

export default User;