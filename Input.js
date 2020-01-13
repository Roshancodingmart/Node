import React, { Component } from "react";
import Display from "./Display";
export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      tweet: "",
      arr: {
        tweete: ""
      }
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleTweet = () => {
      this.setState({
          arr:{
              tweete:this.state.tweet
          }
      },()=>{

            var admin = localStorage.getItem("admin");
            if(!localStorage.getItem(admin))
            {
                localStorage.setItem(admin,JSON.stringify([]))
            }
        var data = JSON.parse(localStorage.getItem(admin))
        data.push([this.state.arr])
        localStorage.setItem(admin,(JSON.stringify(data)))
        
      })
    this.Clear();
  };
  Clear=()=>
  {
    this.setState({
      tweet:''
    })
    window.location.reload(false)
  }
  render() {
    return (
      <>
        <div>
          <textarea
            value={this.state.tweet}
            name="tweet"
            placeholder="what's happening?"
            onChange={this.handleChange}
          />
          <button onClick={this.handleTweet}></button>
        </div>
        <Display obj={this.state.arr} />
      </>
    );
  }
}
