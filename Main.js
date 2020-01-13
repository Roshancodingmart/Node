import React, { Component } from "react";
import User from "./User"
import Signup from "./signup";
import Input from "./Input";
import Signin from "./Signin";
export default class Main extends Component {
  render() {
    return (
      <div>
        <User />
        <Signup />
        <Signin />
        <Input />
      </div>
    );
  }
}
