import React from 'react';
import logo from './logo.svg';
import './App.css';
import MemesContainer from './components/MemesContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meme Generator</h1>

      </header>
      
      <MemesContainer />
     
    </div>
  );
}

export default App;