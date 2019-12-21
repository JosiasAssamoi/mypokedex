import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/layout/Nav'
import SearchBar from './components/layout/SearchBar'
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div className="App">
      < Nav />
      <SearchBar />
      <div className="container">
        <div className="row">
          <div className="col">
            <Pokedex />
          </div>
        </div>
      </div>



    </div>
  );
}

export default App;
