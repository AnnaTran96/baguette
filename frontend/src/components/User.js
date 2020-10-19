import React, { Component } from "react";
import BasketCard from './BasketCard'

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

  handleClick = e => {
    e.preventDefault()
    this.props.history.push('/payment')
}

  render() {
    return (
      <div className="user-container">
        <h4>Welcome {this.state.username}!</h4>
        <BasketCard/>
        <button className="payBtn" onClick={this.handleClick}>Pay Now</button>
      </div>
    );
  }
}

export default User;