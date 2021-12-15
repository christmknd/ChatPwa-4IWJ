import React from 'react';
import Salon from './Salon'
import Chat from './Chat'
import {Grid} from "@mui/material";
import {Box} from "@material-ui/core";

function Room(){

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
            <h1>Bienvenue dans le Chat 4IWJ</h1>

            <Grid item md={10}>
                <Box mb={4}>
                    <Salon/>
                </Box>
                <Box mb={4}>
                    <Chat/>
                </Box>
            </Grid>
        </Grid>

    )
}

export default Room;
