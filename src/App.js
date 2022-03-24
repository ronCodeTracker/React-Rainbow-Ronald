

import React, { useState } from 'react'
// Make sure to import the component we just built:
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'


import logo from './logo.svg';
import './App.css';

function App() {
    let [colors, setColors] = useState([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])

    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock key={i} color={color} />
        )
    })

    const addColor = (newColor) => {
        setColors([...colors, newColor])
    }


  return (
      <div className="App">
          {colorMap}
          {/*<div style={{color:'blue',fontSize:'30px'}} >Color</div>*/}
          <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;




/*
 * 
 * 
 * 
 *
 *   <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
 * 
 * 
 * 
 * 
 * */