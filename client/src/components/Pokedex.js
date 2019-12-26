import React, { Component } from 'react'
import PokemonCard from './PokemonCard'
import {Link} from 'react-router-dom'

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

    sortList(e){
        const input_type = e.target.value
        let pokemons = this.state.pokemons
        if (input_type === 'ndex'){
            pokemons = pokemons.sort((a,b) =>  a[input_type]-b[input_type] )
        }
        else {
            pokemons = pokemons.sort((a,b) => { if(a[input_type] < b[input_type]) {return -1} if(a[input_type] > b[input_type]) {return 1} return 0} )
        }
        
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
                            <select name="search_param" id="search_param"  onChange={(event)=>this.sortList(event)}  className="btn btn-default rounded-pill" data-toggle="dropdown" >
                                <option value="nom">Nom</option>
                                <option value="ndex">Numéro</option>
                                <option value="espece">Espèce</option>
                            </select>
                        </div>
                        <input type="text" className="form-control" placeholder="Tapez votre recherche ici"  onChange={(event)=>this.filterList(event)}/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                {pokemons.map(pokemon => {
                                    return <Link to='/' key={pokemon.ndex} className=" col-lg-3 col-md-4 col-sm-5 mb-5"  style={{'cursor':'initial','textDecoration':'none',listStyle:'none',color:'black'}}><PokemonCard key={pokemon.ndex} details={pokemon} /></Link>

                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
     
        )
    }
}
