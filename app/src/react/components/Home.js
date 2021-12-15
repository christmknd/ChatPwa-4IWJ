import React, {useContext, useState} from 'react';
import Login from "./Anonyme/Login";
import Register from "./Anonyme/Register";
import {getUser, IsConnect} from "../../api/database/user";
import Room from "./Connected/Room";
import UserContext from "../context/UserContext";
import {getMessages} from "../../api/database/message";
import {Grid} from "@mui/material";
import {Box} from "@material-ui/core";

function Home() {

    const {selectors} = useContext(UserContext);

    {
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
                    <h1>Bienvenue sur le chat 4IWJ</h1>
                    {(selectors.getIsConnect()) ? <Room/> :
                        <Box mb={4}>
                            <Login/>
                            <Register/>
                        </Box>
                    }
                </Grid>

            </Grid>
        )
    }
}

export default Home;
