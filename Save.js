import React, { Component } from 'react'

export default class Save extends Component {
    render(props) {
        var value = [[this.props.obj]]
        if(!localStorage.getItem("user")){
            localStorage.setItem("user",JSON.stringify(value));
        }
        else{
            var data= JSON.parse(localStorage.getItem('user'))
            data=[...data,...value];
            localStorage.setItem("user",JSON.stringify(data))
        }
        return (
          <>
          </>
        )
    }
}
