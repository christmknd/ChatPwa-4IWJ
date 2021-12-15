import React, {useContext, useEffect, useState} from 'react';
import Salon from './Salon'
import Chat from './Chat'
import {Grid} from "@mui/material";
import {Box} from "@material-ui/core";
import UserContext from "../../context/UserContext";
import {getTimeLatence, getUsername} from "../../../api/database/user";
import {getMessagesOnValue} from "../../../api/database/message";

function Room(){
    const {selectors} = useContext(UserContext);
    const user = selectors.getUser()
    console.log("Room")
    console.log(user)


    const [userLocal, setUserLocal] = useState(null)




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
                    <h2>Bienvenue {user.email}</h2>
                    <Salon
                        userLocal = {userLocal}
                        setUserLocal = {setUserLocal}
                    />
                </Box>
                <Box mb={4}>
                    {userLocal && <Chat
                        userTo={userLocal}
                    />}
                </Box>
            </Grid>
        </Grid>
    )
}

export default Room;
