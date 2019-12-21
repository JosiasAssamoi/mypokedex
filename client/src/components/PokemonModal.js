import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default class PokemonModal extends Component {
    
    state= {visible:false}

    toggleVisible(){
        this.setState({visible : !this.state.visible })
    }

 
      
    render() {
        console.log('visible = ', this.state.visible);;


        

        return (
            <Modal  isOpen={this.state.visible}> 
                <ModalHeader toggle={this.toggleVisible.bind(this)}>
                    {this.props.details.nom}
                </ModalHeader>
                <ModalBody>
                    Lorem ipsum
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={this.toggleVisible.bind(this)} >Fermer </Button>
                </ModalFooter>
            </Modal>
        )
    }
}
