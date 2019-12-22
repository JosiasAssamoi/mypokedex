import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/layout/Nav'
//import SearchBar from './components/layout/SearchBar'
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div className="App">
      < Nav />
      <Pokedex />




    </div>
  );
}

export default App;
