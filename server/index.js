const express = require('express')
const PORT = 4000
const caughtCtrl = require('./controllers/caughtPokemon')
const wildCtrl = require('./controllers/wildPokemon')
const app = express()
app.use(express.json())


app.get('/api/wild-pokemon', wildCtrl.getWildPokemon)

app.get('/api/pokemon', caughtCtrl.getCaughtPokemon)
app.post('/api/pokemon', caughtCtrl.catchPokemon)
app.put('/api/pokemon/:id', caughtCtrl.editPokemonName)
app.delete('/api/pokemon/:id', caughtCtrl.releasePokemon)




app.listen(PORT, () => console.log(`PULLING INTO PORT ${PORT}`))