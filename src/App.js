import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Finder from './components/Finder'
import Pokedex from './components/Pokedex'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      caughtPokemon: []
    }
    this.catchPokemon = this.catchPokemon.bind(this)
    this.saveName = this.saveName.bind(this)
    this.catchPokemon = this.catchPokemon.bind(this)
  }
  componentDidMount() {

  }
  catchPokemon(pokemon) {

  }
  saveName(id, newName) {

  }
  releasePokemon(id) {

  }
  render() {
    return (
      <div className="App">
        app.js is working
        <Header />
        <Finder
          catchPokemon={this.catchPokemon}
        />
        <Pokedex
          caughtPokemon={this.state.caughtPokemon}
          saveName={this.state.saveName}
          releasePokemon={this.state.releasePokemon}
        />
      </div>
    )
  }
}

export default App
