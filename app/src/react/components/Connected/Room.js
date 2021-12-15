import React, {useContext, useEffect, useState} from 'react';
import Salon from './Salon'
import Chat from './Chat'
import {Grid} from "@mui/material";
import {Box} from "@material-ui/core";
import UserContext from "../../context/UserContext";
import {getUsername} from "../../../api/database/user";

function Room(){
    const {selectors} = useContext(UserContext);
    console.log("Room")
    let user3 = {}
    const [userLocal, setUserLocal] = useState({})



    async function getUser() {
        console.log("getUser")
        const user = await selectors.getUser();
        console.log(user)
        console.log(user.uid)
        user3 = await getUsername(user.uid);
    }







    return (
        <Grid
            container
            justify="center"
            align="center"
            spacing={1}
            style={{
                width: "100%",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Grid item md={10}>
                <Box mb={4}>
                    <h2>Bienvenue </h2>
                    <Salon
                        userLocal = {userLocal}
                        setUserLocal = {setUserLocal}
                    />
                </Box>
                <Box mb={4}>
                    <Chat
                        userLocal = {userLocal}
                    />
                </Box>
            </Grid>
        </Grid>
    )
}

export default Room;
