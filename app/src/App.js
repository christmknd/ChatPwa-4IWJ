import './App.css';
import React, { useContext } from 'react';
import Home from './react/components/Home'
import Room from "./react/components/Room";
import UserContext, {UserProvider} from "./react/context/UserContext";

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
