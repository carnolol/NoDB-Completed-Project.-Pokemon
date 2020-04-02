import React, { Component } from 'react'

export class Grass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grassClicked: false
        }
        this.handleCatchPokemon = this.handleCatchPokemon.bind(this)
    }
    checkGrass() {

    }
    handleCatchPokemon() {
        const newPokemon = {
            name: this.props.pokemon.name,
            image: this.props.pokemon.sprites.front_default
        }
        this.props.catchPokemon(newPokemon)
        this.props.refreshFn()
    }
    render() {
        return (
            <div>
                <p
                    onClick={this.handleCatchPokemon}>
                    {this.props.pokemon.name}
                </p>
                <img
                    onClick={this.handleCatchPokemon}
                    src={this.props.pokemon.sprites.front_default} />
            </div>
        )
    }
}

export default Grass
