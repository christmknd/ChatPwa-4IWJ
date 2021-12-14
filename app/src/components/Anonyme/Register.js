import React from "react";
import {createUser, register} from "../../api/authentification";


export default function Register() {

    async function signUp(e) {
        e.preventDefault();

        const form = this.querySelector('#signUp');

        const email = form.querySelector('input[name="email"]').value;
        const password = form.querySelector('input[name="password"]').value;

        await register(email, password);

        // Change état
        this._connected = true;
    }


    return(
        <>
            <h2>S'inscrire</h2>
            <form action="">
                <label>Pseudo
                    <input name="pseudo" autoComplete="pseudo"/>
                </label> <br/>
                <label>Email
                    <input name="password" autoComplete="password"/>
                </label> <br/>
                <label>Mot de passe
                    <input name="password" autoComplete="password"/>
                </label> <br/>
            </form>
        </>
    );
}
