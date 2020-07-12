import React from 'react';
import logo from './logo.svg';
import './App.css';

async function loadDataFromAPI() {
  const response = await fetch(window.settings.backendApi)
  const data = await response.json()

  console.log(data)
  alert(JSON.stringify(data, null, 4))  
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button style={{padding: '10px 30px'}} onClick={() => loadDataFromAPI()}>LOAD DATA FROM API</button>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Gary Ascuy Anturiano</h1>
        <h3>Senior Software Developer</h3>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
