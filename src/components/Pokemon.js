import React, { Component } from 'react'

export class Pokemon extends Component {
    constructor(){
        super()
        this.state = {
            isEditing: false,
            userInput: ''
        }
    }
    toggleEdit(){

    }
    handleChange(event){

    }
    render() {
        return (
            <div>
                Pokemon.js
            </div>
        )
    }
}

export default Pokemon
