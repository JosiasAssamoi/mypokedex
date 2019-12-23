import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default class PokemonModal extends Component {

    //On crée le modal suite a un click donc on peut l'activer par defaut 
    state = { visible: true, pokemon: null }

    colors = { blanc: "white", gris: "grey", noir: '#286479', rouge: '#e48e87', orange: 'orange', jaune: '#f1d279', vert: '#8BC976', bleu: 'blue', rose: 'pink', or: 'gold', argent: 'silver', marron: '#BF8D49', violet: '#a19ecd' }


    //Sera appelé pour femer le modal
    toggleVisible() {
        this.setState({ visible: !this.state.visible })

    }

    async fetchSinglePokemon() {
        const response = await fetch(`http://localhost:4242/api/pokemons/${this.props.ndex}`)
        const pokemon = await response.json()
        this.setState({ pokemon })

    }

    componentDidMount() {
        this.fetchSinglePokemon()
    }

    render() {
        const { pokemon } = this.state



        if (pokemon) {


            return (

                <Modal isOpen={this.state.visible}>
                    <ModalHeader className='mx-auto'>
                        {pokemon.nom}
                    </ModalHeader>
                    <ModalBody>
                        <img id="ModalImg" className="card-img-top float-left " src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.ndex}.png`} alt="Card cap" />

                        <div className="container">
                            <span>Expérience</span>
                            <div className="progress mb-15">
                                <div className="progress-bar progress-bar-striped progress-bar-animated font-weight-bold text-dark" role="progressbar" aria-valuenow={pokemon.expval} aria-valuemin="0" aria-valuemax="400" style={{ "width": String(pokemon.expval / 2) + '%', "backgroundColor": this.colors[pokemon.couleur.toLowerCase()] }}>  {pokemon.expval}</div>
                            </div>
                            <div className="row px-10 ">
                                <p>Poids : {pokemon.poids} lbs</p>
                                <p>Taille : {pokemon.taille} m </p>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={() => this.toggleVisible()} >Fermer </Button>
                    </ModalFooter>
                </Modal>
            )
        }
        //sinon on ne retourne rien
        return ''
    }

}
