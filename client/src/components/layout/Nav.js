import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// eslint-disable-next-line
import logo from './../../logo.svg';

export default class Nav extends Component {
    render() {
        return (
            <div className="navbar  box-shadow">
                <div className="container-fluid d-flex justify-content-between">
                    <a href="localhost:4242" className="navbar-brand d-flex" style = {{color:"white"}}>
                    <img className="App-logo" src={logo}  alt="logo"  />
                        <strong>MyPokedex</strong>
                    </a>             
                </div>
          </div>
        )
    }
}
