const pokemon = []
let id = 0

module.exports = {
    //sends pokemon array to the url /api/pokemon
    getCaughtPokemon: (req, res) => {
        res.status(200).send(pokemon)
    },
    catchPokemon: (req, res) => {
        //when we make this request it will request a body object with name and image properties
        const { name, image } = req.body
        const newPokemon = {
            id,
            name,
            image,
        }
        pokemon.push(newPokemon)
        id++
        res.status(200).send(pokemon)
    },
    editPokemonName: (req, res) => {
        // it is const id because in our URL we did /:id
        const { id } = req.params
        // gotta have a property called newName on the body
        const { newName } = req.body
        // where in the array is this pokemon im locking for located
        const index = pokemon.findIndex(pokemon => {
            return pokemon.id === +id
        })
        // we do -1 because if findIndex() cant find the pokemon at that index it defaults to -1
        if (index === -1) {
            return res.status(404).send('Pokemon not found')
        }
        // reasigning the name property of the specific pokemon
        pokemon[index].name = newName
        res.status(200).send(pokemon)
    },
    releasePokemon: (req, res) => {
        const { id } = req.params
        const index = pokemon.findIndex(pokemon => {
            return pokemon.id === +id
        })
        if (index === -1) {
            return res.status(404).send('pokemon not found')
        }
        // remove the pokemon from the pokemon array at whatever index we indicate
        pokemon.splice(index, 1)

        res.status(200).send(pokemon)
    }
}

