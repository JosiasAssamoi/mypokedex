import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/layout/Nav'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
//import SearchBar from './components/layout/SearchBar'
import Pokedex from './components/Pokedex';
import PokemonModal from './components/PokemonModal';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      < Nav />
      <Switch>
      <Route path="/" exact component ={Pokedex}></Route>
      <Route path = "/:id" exact component={PokemonModal}></Route>
      </Switch>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
