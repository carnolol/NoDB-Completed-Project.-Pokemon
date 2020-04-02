const axios = require('axios')

module.exports = {
  getWildPokemon: (req, res) => {
    const pokemon = []
    // this will be our random number generator to get a number between 1 and 151
    const random1 = Math.ceil(Math.random() * 151)
    const random2 = Math.ceil(Math.random() * 151)
    const random3 = Math.ceil(Math.random() * 151)

    //we have to use response in out .then to not overide the varible res that was passed into our getWildPokeon()
    axios.get(`https://pokeapi.co/api/v2/pokemon/${random1}`).then(response => {
      pokemon.push(response.data)
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${random2}`)
        .then(response => {
          pokemon.push(response.data)
          axios
            .get(`https://pokeapi.co/api/v2/pokemon/${random3}`)
            .then(response => {
              pokemon.push(response.data)

              res.status(200).send(pokemon)
            })
        })
    })
  },
}