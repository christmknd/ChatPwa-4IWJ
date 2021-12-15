import React, {useContext, useState} from 'react';
import Login from "./Anonyme/Login";
import Register from "./Anonyme/Register";
import {
    createMessage, deleteMessageId, getMessagesOnValue
} from "../../api/database/message";
import {getUser, IsConnect, systemConnect} from "../../api/database/user";
import {login, logout, register} from "../../api/authentification";
import Room from "./Room";
import UserContext from "../context/UserContext";

function Home() {

    const {selectors} = useContext(UserContext);

    {
        return (
            <>
                <h1>Bienvenue sur le chat 4IWJ</h1>
                <button onClick={() => {
                    console.log(getUser());
                }}>getUser</button>
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
