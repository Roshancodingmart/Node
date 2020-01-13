import React, { Component } from 'react'

export default class Display extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        var user = localStorage.getItem("admin")
        var data = JSON.parse(localStorage.getItem(user))
        // alert(typeof data)
        console.log(data)
        return (
           <div>
           
           {data? (
            data.map((value, index)=>{
               return(
                <div key={index}>
                   {console.log("index ", index, value)}
                   {value[0].tweete}
               </div>)
           })
           ): null}
 
           </div>
        )
    }
}
