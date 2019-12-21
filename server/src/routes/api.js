//On recup un router qui va nous permettre d'use app.get use etc.
const {Router} = require('express')
const api = Router()
const pokemons  = require('./pokemons')
const cors = require('cors')



api.use(cors())

api.get('/',(req,res)=>{
res.send('Go to http://localhost:4242/api/pokemons to get data ')
}
)

// if we go to /api/pokemons/ it will send pokemons which is a json file as a middleware
api.use('/pokemons',pokemons)

module.exports = api


