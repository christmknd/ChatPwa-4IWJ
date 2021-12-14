import React, {useState} from 'react';
import Login from "./Anonyme/Login";
import Register from "./Anonyme/Register";
import {
    createMessage, getMessagesOnValue
} from "../api/database/message";

function Home() {
console.log(process.env)
    {
        return (
            <>
                <h1>Bienvenue sur le chat 4IWJ</h1>
                <button title={'Press'} onClick={() => {
                    createMessage("idUserFrom", "idUserTo", "content", "dateTime", "isReceived", "isView");
                    alert("createMessage");
                }}/>
                <button title={'Press'} onClick={() => {
                    console.log(getMessagesOnValue());
                    alert("getMessagesBis");
                }}/>
                <button title={'Press'} onClick={() => {
                    console.log(getMessagesOnValue().once());
                    alert("getMessagesBis");
                }}/>
                <Register/>
                <Login/>
            </>

        )
    }
}

export default Home;
