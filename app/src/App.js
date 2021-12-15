import './App.css';
import React, {useContext, useState} from 'react';
import Home from './react/components/Home'
import UserContext, {UserProvider} from "./react/context/UserContext";

function App() {
    const [isConnect,setIsConnect] = useState(true)

    return (
        <UserProvider>
            <div className="App">
                <Home/>
            </div>
        </UserProvider>
    );
}

export default App;
