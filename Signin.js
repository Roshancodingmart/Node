import React, { Component } from "react";
import Check from "./Check";
export default class Signin extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      user: {
        name: "",
        pass: ""
      },
      val: false
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    this.setState({
      user: {
        name: this.state.username,
        pass: this.state.password
      },
      val: true
    });
    this.Clear();
  };
  Clear = () => {
    this.setState({
      username: "",
      password: ""
    });
  };
  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Enter ur username"
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Enter ur password"
            />
            <button>Sign In</button>
          </form>
        </div>
        <div>{this.state.val && <Check obj={this.state.user} />}</div>
      </>
    );
  }
}
