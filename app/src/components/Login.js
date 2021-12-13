import React from 'react';

function Login (){

    {
        return (
            <html>
            <body>
            <h1>Bienvenue sur le chat 4IWJ</h1>

            <div>
                <h2>S'inscrire</h2>
                <form action="">
                    <label>Pseudo
                        <input name="pseudo" autoComplete="pseudo"></input>
                    </label> <br/>
                    <label>Email
                        <input name="password" autoComplete="password"></input>
                    </label> <br/>
                    <label>Mot de passe
                        <input name="password" autoComplete="password"></input>
                    </label> <br/>
                </form>
            </div>

            <div>
                <h2>Se connecter</h2>
                <form action="">
                    <label>email :
                        <input name="email" autoComplete="email"></input>
                    </label> <br/>
                    <label>mot de passe :
                        <input name="password" autoComplete="password"></input>
                    </label> <br/>
                    <button>Connexion</button>
                </form>
            </div>
            </body>
            </html>
        )
    }
}

export default Login;
