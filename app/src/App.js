import './App.css';
import React, {Component, useState} from 'react';
import Home from './components/Home'
import Room from "./components/Room";

function App() {
    const [isConnect,setIsConnect] = useState(false)
  return (
    <div className="App">
        {isConnect ? <Room/> : <Home/> }
    </div>
  );
}

export default App;
