import React, { Component } from "react";
import Save from "./Save"
export default class Signup extends Component {
    constructor(){
        super()
        this.state={
            username1:'',
            password1:'',
            val:false,
            user:{
                name:'',
                pass:''
            }
        }
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleForm=(event)=>{
        event.preventDefault();
        this.setState({
            val:true,
            user:{
                name:this.state.username1,
                pass:this.state.password1
            }
        })
        this.Clear()
    }
    Clear=()=>{
        this.setState({
            username1:'',
            password1:''
        })
    }
  render() {
    return (
        <>
      <div>
        <form onSubmit={this.handleForm}>
          <input type="text" value={this.state.username1} name="username1" placeholder="enter ur name" onChange={this.handleChange} />
          <input type="password" value={this.state.password1} name="password1" placeholder="enter ur password" onChange={this.handleChange} />
          <button>Sign up</button>
        </form>
      </div>
      {this.state.val && <Save obj={this.state.user}/>}
      </>
    );
  }
}
