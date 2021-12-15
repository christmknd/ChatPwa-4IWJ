import React, {useContext, useState} from "react";
import {login} from "../../../api/authentification";
import UserContext from "../../context/UserContext";
import {Card, CardContent} from "@mui/material";

export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const {actions, selectors} = useContext(UserContext);

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        console.log("email is "+email);
        console.log("password is "+password);

        // Change User
        const user = await login(email, password);
        console.log(user)
        if (user){
            console.log("Conexion réussis")
            await actions.setUser(user)
            // Change état
            await actions.setIsConnect();
            console.log(selectors.getIsConnect())
        }
        else {
            alert("Identifiant ou mot de passe incorrect")
            console.log("Conexion échoué")
            setPassword("");
        }
    }


    return(
        <Card mb={4}>
            <h2>Login</h2>
            <CardContent>
                <form method="post" onSubmit={handleSubmit}>
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
            </CardContent>
        </Card>
    );

}
