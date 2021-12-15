import React, {useContext, useState} from "react";
import {register} from "../../../api/authentification";
import UserContext from "../../context/UserContext";


export default function Register() {
    const [pseudo,setPseudo] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const {actions, selectors} = useContext(UserContext);

    const handleChangePseudo = (event) => {
        setPseudo(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        console.log("pseudo is "+pseudo);
        console.log("email is "+email);
        console.log("password is "+password);

        // Change User
        const user =  await register(email, password).then((user) => {console.log(user)});
        if (user){
            console.log("Conexion réussis")
            await actions.setUser(user)
            // Change état
            await actions.setIsConnect();
            console.log(selectors.getIsConnect())
        }
        else {
            console.log("Conexion échoué")
            setPassword("");
        }
    }


    return(
        <>
            <h2>Register</h2>
            <form method="post" onSubmit={handleSubmit}>
                <label>
                    Pseudo :
                    <input type="text" name="pseudo" value={pseudo} onChange={handleChangePseudo} />
                </label><br/>
                <label>
                    Email :
                    <input type="email" name="email" value={email} onChange={handleChangeEmail} />
                </label><br/>
                <label>
                    Password :
                    <input type="password" name="password" value={password} onChange={handleChangePassword}  />
                </label><br/>
                <input type="submit" value="Envoyer" />
            </form>
        </>
    );
}
