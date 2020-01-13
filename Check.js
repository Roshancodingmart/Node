import React, { Component } from 'react'

export default class Check extends Component {
    constructor(props){
        super(props)
        this.state={
            admin:{
                name:'',
                pass:''
            }
        }
    }
    render() {
        var data1=[this.props.obj]
        var data = JSON.parse(localStorage.getItem("user"))
        for(let i=0;i<data.length;i++){
            if(JSON.stringify( data[i])==JSON.stringify( data1))
            {
                // localStorage.setItem(this.props.obj.name,JSON.stringify(this.state.tweet))
                localStorage.setItem("admin",this.props.obj.name)
                break
            }
        }
        return (
            <>
                <div>
                </div>
            </>
        )
    }
}
