import React from "react";
import {login} from "../../api/authentification";

export default function Login() {


    async function signIn(e) {
        e.preventDefault();

        const form = this.querySelector('#signIn');

        const email = form.querySelector('input[name="email"]').value;
        const password = form.querySelector('input[name="password"]').value;

        // Change User
        this._user = await login(email, password);

        // Change état
        this._connected = true;
    }


    return(
        <>
            <h2>Se connecter</h2>
            <form action="">
                <label>email :
                    <input name="email" autoComplete="email"/>
                </label> <br/>
                <label>mot de passe :
                    <input name="password" autoComplete="password"/>
                </label> <br/>
                <button>Connexion</button>
            </form>
        </>
    );

}
