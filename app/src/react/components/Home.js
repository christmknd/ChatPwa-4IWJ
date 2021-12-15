import React, {useContext, useState} from 'react';
import Login from "./Anonyme/Login";
import Register from "./Anonyme/Register";
import {getUser, IsConnect} from "../../api/database/user";
import {logout } from "../../api/authentification";
import Room from "./Connected/Room";
import UserContext from "../context/UserContext";
import {getMessages} from "../../api/database/message";

function Home() {

    const {selectors} = useContext(UserContext);

    {
        return (
            <>
                <h1>Bienvenue sur le chat 4IWJ</h1>
                <button onClick={() => {
                    console.log(getMessages());
                }}>getMessages</button>
                <button onClick={() => {
                    console.log(IsConnect());
                }}>IsConnect</button>
                <button title='Press' onClick={() => {
                    console.log(logout());
                }}>logout</button>
                {(selectors.getIsConnect()) ? <Room/> :
                    <>
                        <Login/>
                        <Register/>
                    </>
                }
            </>


        )
    }
}

export default Home;
