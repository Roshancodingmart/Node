import React, { Component } from 'react'

export default class User extends Component {
    constructor(){
        super()
            this.state={
                user:''
            }
        
    }
    componentWillMount(){
        var user = localStorage.getItem("admin")
        user = user.toUpperCase()
        this.setState({
            user:user
        })
    }
    render() {
        return (
            <div>
            Hello   {  }
                {this.state.user}
            </div>
        )
    }
}
