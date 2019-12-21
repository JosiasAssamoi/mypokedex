import React, { Component } from 'react'
import PokemonCard from './PokemonCard'

export default class Pokedex extends Component {

    state = {pokemons:[]}

    async fetchPokemons(){
        const response = await fetch("http://localhost:4242/api/pokemons")
        const pokemons =  await response.json()
        this.setState({pokemons})
 
    }
    
    componentDidMount(){
       this.fetchPokemons()
       
    }


    render() {

        const {pokemons}= this.state
        

        return (
            <div className="row">
                {pokemons.map(pokemon => {
                   return  <PokemonCard key ={pokemon.ndex} details={pokemon} />
                    
                })}
            </div>
        )
    }
}
