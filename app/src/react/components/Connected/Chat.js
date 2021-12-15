import React from 'react';
import {Grid, Button, Box} from "@mui/material";
import {
    Card,
    CardContent,
    TableBody,
    TableCell,
    TableContainer, TableHead,
    TableRow,
    TextField
} from "@material-ui/core";

function Chat() {

    function createData(username, content, dateTime, isReceived, isView) {
        return {username, content, dateTime, isReceived, isView};
    }

    const rows = [
        createData('Alan', 'zfsfgsz', '15.12.21, 15:00', 'yes', 'no'),
    ]

    return (
        <Card>
            <h2>Alan : Liste des Messages</h2>
            <CardContent>
                <Box component="form" noValidate autoComplete="off">
                    <Grid item xs={12} sm={12} md={12}>
                        <TextField>
                            id="content"
                            label="content"
                            name="content"
                            style={{width: "80%"}}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Box m={4}>
                            <Button variant="contained">
                                Valider
                            </Button>
                        </Box>
                    </Grid>
                    <TableContainer>
                        <TableHead>
                            <TableRow>
                                <TableCell>Username</TableCell>
                                <TableCell align="right">Heure</TableCell>
                                <TableCell align="right">Message</TableCell>
                                <TableCell align="right">Recu</TableCell>
                                <TableCell align="right">Lu</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.username}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell align="right">{row.username}</TableCell>
                                    <TableCell align="right">{row.content}</TableCell>
                                    <TableCell align="right">{row.dateTime}</TableCell>
                                    <TableCell align="right">{row.isReceived}</TableCell>
                                    <TableCell align="right">{row.isView}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </TableContainer>
                </Box>
            </CardContent>
        </Card>
    )

}

export default Chat;
