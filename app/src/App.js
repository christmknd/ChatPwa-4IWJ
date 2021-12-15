import './App.css';
import React from 'react';
import Home from './react/components/Home'
import {UserProvider} from "./react/context/UserContext";

function App() {

    return (
        <UserProvider>
            <div className="App">
                <Home/>
            </div>
        </UserProvider>
    );
}

export default App;
