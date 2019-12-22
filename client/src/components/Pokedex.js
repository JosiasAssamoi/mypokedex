import React, { Component } from 'react'
import PokemonCard from './PokemonCard'

export default class Pokedex extends Component {

    state = { initialPokemons: [] , pokemons: [] }

    async fetchPokemons() {
        const response = await fetch("http://localhost:4242/api/pokemons")
        const pokemons = await response.json()
        this.setState({ pokemons , initialPokemons:pokemons })

    }

    filterList(e){
        const input = e.target.value
        //name ou ndex
        // eslint-disable-next-line
        const input_type =document.getElementById('search_param').value
        
        let pokemons = this.state.initialPokemons

        
       pokemons = pokemons.filter( (pokemon)=> {return pokemon[input_type].toLowerCase().includes(input) })

       this.setState({pokemons})
        
    }

    componentDidMount() {
        this.fetchPokemons()

    }


    render() {

        const { pokemons } = this.state


        return (

            <React.Fragment>
                <div className="container col-lg-4 col-md-5 col-sm-6 rounded-pill bg-light mb-5">
                    <div className="col-xs-8 col-xs-offset-2 input-group">
                        <div className="search-panel">
                            <select name="search_param" id="search_param" className="btn btn-default rounded-pill" data-toggle="dropdown">
                                <option value="nom">Nom</option>
                                <option value="ndex">Numéro</option>
                                <option value="espece">Espèce</option>
                            </select>
                        </div>
                        <input type="text" className="form-control" placeholder="Entrez un nom ou un numéro"  onChange={(event)=>this.filterList(event)}/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                {pokemons.map(pokemon => {
                                    return <PokemonCard key={pokemon.ndex} details={pokemon} />

                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
