// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {


    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    clickButton = () =>{
        this.setState(previousState =>{
            return{
                timesClicked : previousState.timesClicked + 1
            }
        })
    }


    render(){
      return <button type="button"
      onClick = {this.clickButton}
      >{this.state.timesClicked}</button>

    }


  }