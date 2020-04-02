import React, { Component } from 'react'
import Grass from './Grass'

export class Finder extends Component {
    constructor(props){
        super(props)
        this.state = {
            wildPokemon:[]
        }
    }
    componentDidMount(){

    }
    render() {
        const wildPokemon = this.state.wildPokemon.map(pokemon => {
            return <Grass pokemon={pokemon} catchPokemon={this.props.catchPokemon}/>
        })
        return (
            <div>
                Finder.js
                {wildPokemon}
            </div>
        )
    }
}

export default Finder
