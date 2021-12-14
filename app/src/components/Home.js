import React from 'react';
import Login from "./Anonyme/Login";
import Register from "./Anonyme/Register";
import {createTodo, createUser} from "../api/database";

function Home() {

    {
        return (
            <>
                <h1>Bienvenue sur le chat 4IWJ</h1>
                <button title={'Press'} onClick={() => {
                    createTodo()
                }}/>
                <Register/>
                <Login/>
            </>

        )
    }
}

export default Home;
