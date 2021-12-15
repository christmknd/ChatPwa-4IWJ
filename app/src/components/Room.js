import React from 'react';
import Salon from './Salon'
import Chat from './Chat'
import {Grid} from "@mui/material";

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
            <Grid item md={10}>
                <Salon/>
                <Chat/>
            </Grid>
        </Grid>

    )
}

export default Room;
