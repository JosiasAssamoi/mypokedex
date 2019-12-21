//On recup un router qui va nous permettre d'use app.get use etc.
const {Router} = require('express')
const api = Router()
const data = require('./../../pokedex.json')


//send pokedex in json file
api.get('/',(req,res)=>{
    res.json(data)
})


//Get json of a specifix pokemon 
api.get('/:id',(req,res)=>{
    const searchedId = req.params.id
    let searchedPokemon = {};
    for (obj of Object.values(data)){
        if(searchedId == parseInt(obj['numéro']))
            searchedPokemon = obj  
    }
    res.json(searchedPokemon)  
})



module.exports = api