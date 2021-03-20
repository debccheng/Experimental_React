import React from 'react';
import Starfield from './components/Starfield';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <h1>Starfield</h1>
        <p>
          This React Starfield is based on&nbsp;
          <a
            className="starfield-link"
            href="https://github.com/dwmkerr/starfield"
            target="_blank"
            rel="noopener noreferrer"
          >
            dwmkerr's starfield.
          </a>
        </p>
      </div>
      <Starfield className="starfield"/>
    </div>
  );
}

export default App;
