import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Finder from './components/Finder'
import Pokedex from './components/Pokedex'
import Axios from 'axios'

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
    Axios.get('/api/pokemon').then( res => {
      this.setState({
        caughtPokemon: res.data
      })
    })
  }
  catchPokemon(pokemon) {
    Axios.post('/api/pokemon', pokemon).then(res => {
      this.setState({
        caughtPokemon: res.data
      })
    })
  }
  saveName(id, newName) {
    Axios.put(`/api/pokemon/${id}`, {newName}).then(res => {
      this.setState({
        caughtPokemon: res.data
      })
    })
  }
  releasePokemon(id) {

  }
  render() {
    return (
      <div className="App">
        <Header />
        <Finder
          catchPokemon={this.catchPokemon}
        />
        <Pokedex
          caughtPokemon={this.state.caughtPokemon}
          saveName={this.saveName}
          releasePokemon={this.releasePokemon}
        />
      </div>
    )
  }
}

export default App
