import React, {useState} from 'react';
import Login from "./Anonyme/Login";
import Register from "./Anonyme/Register";
import {
    createMessage,
    createTodo,
    createUser,
    getMessages,
    getMessagesBis,
    getMessagesLocal
} from "../api/database/message";

function Home() {

    {
        return (
            <>
                <h1>Bienvenue sur le chat 4IWJ</h1>
                <button title={'Press'} onClick={() => {
                    createMessage("idUserFrom", "idUserTo", "content", "dateTime", "isReceived", "isView");
                    alert("createMessage");
                }}/>
                <button title={'Press'} onClick={() => {
                    console.log(getMessagesLocal());
                    alert("getMessagesBis");
                }}/>
                <Register/>
                <Login/>
            </>

        )
    }
}

export default Home;
