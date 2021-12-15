import React from 'react';
import {getMessagesOnValue} from "../api/database/message";
import {Grid,Button,Box} from "@mui/material";
import {Card, CardContent, CardHeader, TextField} from "@material-ui/core";

function Chat (){

    return (

            <Card>
                    <h2>Liste des Messages</h2>
                <CardContent>
                    <Box component="form" noValidate autoComplete="off">
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField>
                                id="content"
                                label="content"
                                name="content"
                                style={{ width: "80%" }}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Button variant="contained">
                                Valider
                            </Button>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
    )

}

export default Chat;
