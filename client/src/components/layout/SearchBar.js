import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="container col-lg-4 col-md-5 col-sm-6 rounded-pill bg-light mb-5">
                <div className="col-xs-8 col-xs-offset-2 input-group">
                        <div className="search-panel">
                            <select name="search_param" id="search_param" className="btn btn-default rounded-pill" data-toggle="dropdown">
                                <option value="all">All</option>
                                <option value="username">Nom</option>
                                <option value="email">Numero</option>
                            </select>
                        </div>
                        <input type="text" className="form-control" name="x" placeholder="Entrez un nom ou un numéro" />
                </div>
            </div>
             
        )
    }
}
