import React, { Component } from 'react'
import './../App.css';
import PokemonModal from './PokemonModal';
export default class PokemonCard extends Component {
  //  ShowModal evite de créer tout les modal sans avoir cliqué sur une img

  constructor(props){
    super(props)
    this.state={showModal:false}
    this.modalref = React.createRef()
  }

  activateShowModal(){
    //active la visible du composant enfant cad du pokemonmodal
    this.modalref.current.toggleVisible()
  }

  render() {
    return (
      <div className=" col-lg-3 col-md-4 col-sm-5 mb-5">
      {/*On verifie letat du modal de la card on ne crée un Modal que lorsque l'on va cliquer sur l'img */}
        <PokemonModal ref={this.modalref} details = {this.props.details}/>
        <img id="animateImg" className="card-img-top " src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.props.details.ndex}.png`} alt="Card cap" onClick={()=>this.activateShowModal()} />

        <div className="card">

          <div className="card-header" style={{ "boxShadow": "6px 12px 17px -4px #7a7a7a" }} >
            <h5 className="card-title" >{this.props.details.nom}</h5>

            <p className="card-text">
              <b>Type(s):</b> | {this.props.details.type1 + " " + (this.props.details.type2 || "")} | </p>
            <p><b>Espèce:</b> {this.props.details.espece}</p>
          </div>
        </div>
      </div>
    )
  }
}
