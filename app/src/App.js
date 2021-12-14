import './App.css';
import React, {Component, useState} from 'react';
import Login from './components/Login'
import Room from "./components/Room";

function App() {
    const [isConnect,setIsConnect] = useState(true)
  return (
    <div className="App">
        {isConnect ? <Room/> : <Login/> }
    </div>
  );
}

export default App;
