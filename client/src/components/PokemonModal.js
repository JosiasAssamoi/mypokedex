import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default class PokemonModal extends Component {
    
    //On crée le modal suite a un click donc on peut l'activer par defaut 
    state= {visible:true,pokemon:null}

    //Sera appelé pour femer le modal
    toggleVisible()   {
        this.setState({visible : !this.state.visible })
        
    }

    async fetchSinglePokemon(){
        const response = await fetch(`http://localhost:4242/api/pokemons/${this.props.ndex}`)
        const pokemon =  await response.json()
        this.setState({pokemon})
        
    }

    componentDidMount(){
        this.fetchSinglePokemon()
     }

    render() { 
        const {pokemon} = this.state 
        if(pokemon){
            return (
            
                <Modal  isOpen={this.state.visible}> 
                    <ModalHeader className='mx-auto'>
                        {pokemon.nom}
                    </ModalHeader>
                    <ModalBody>
                    <img id="ModalImg" className="card-img-top " src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.ndex}.png`} alt="Card cap" />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={()=>this.toggleVisible()} >Fermer </Button>
                    </ModalFooter>
                </Modal>
            )
        }
        //sinon on ne retourne rien
        return ''
    }

}
