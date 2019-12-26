import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Redirect } from 'react-router-dom'

export default class PokemonModal extends Component {

    //On crée le modal suite a un click donc on peut l'activer par defaut 
    state = { visible: true, pokemon: null , fromUrl:false}
   
   

    colors = { blanc: "white", gris: "grey", noir: '#286479', rouge: '#e48e87', orange: 'orange', jaune: '#f1d279', vert: '#8BC976', bleu: 'blue', rose: 'pink', or: 'gold', argent: 'silver', marron: '#BF8D49', violet: '#a19ecd' }


    //Sera appelé pour femer le modal
    toggleVisible() {
        this.setState({ visible: !this.state.visible })

    }

    async fetchSinglePokemon(numero) {
        const response = await fetch(`http://localhost:4242/api/pokemons/${numero}`)
        const pokemon = await response.json()
        if (pokemon !=={}){
            this.setState({ pokemon })
        }
       
        



    }

    shout() {
            console.log(this.state,this.props);
            
        let cri = new Audio(`https://play.pokemonshowdown.com/audio/cries/${this.state.pokemon.nomen.toLowerCase().replace('.','')}.ogg`)
        cri.volume=0.3
        cri.play()
       
    }

    componentDidMount() {
        let numero ;
        if (this.props.match ){
            this.setState({fromUrl: true})
            numero= this.props.match.params.id
        }
        else{
            numero = this.props.ndex
        }
        this.fetchSinglePokemon(numero)
        
    }

    redirect(){
        if (this.state.fromUrl){
            this.props.history.push('/');
         }
    }

    render() {
        const { pokemon } = this.state



        if (pokemon && pokemon.nom) {
            
            return (

                <Modal isOpen={this.state.visible}>
                    <ModalHeader className='mx-auto'>
                        {pokemon.nom}
                    </ModalHeader>
                    <ModalBody>
                    
                        <img id="ModalImg" className="card-img-top float-left " onClick={()=>this.shout()} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.ndex}.png`} alt="Card cap" style={{cursor:'pointer'}} />

                        <div className="container">
                            <span style={{"color":'white',"fontWeight":'600'}}>Expérience</span>
                            <div className="progress mb-15">
                                <div className="progress-bar progress-bar-striped progress-bar-animated font-weight-bold text-dark" role="progressbar" aria-valuenow={pokemon.expval} aria-valuemin="0" aria-valuemax="400" style={{ "width": String(pokemon.expval / 2) + '%', "backgroundColor": this.colors[pokemon.couleur.toLowerCase()] }}>  {pokemon.expval}</div>
                            </div>
                            <div className="row card ">
                                <p>Poids : {pokemon.poids} lbs</p>
                                <p>Taille : {pokemon.taille} m </p>
                                <ul className="card-text">Attaques
                                    {pokemon.attaques.map((att)=>{
                                        return <li>nom : {att.nom}</li>
                                   })
                                   }
                                </ul>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={() => {this.toggleVisible() ; this.redirect()}} >Fermer </Button>
                    </ModalFooter>
                </Modal>
            )
        }
        else if (pokemon){
            return <Redirect to='/' />
        }
        //sinon on ne retourne rien
        return ''
    }

}
