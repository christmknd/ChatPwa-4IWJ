import React from 'react';
import {
    Button,
    Card,
    CardContent,
    CardActions,
    Grid,
    makeStyles,
    Box,
    Typography,
    TextField,
    Link
} from "@mui/material";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";


function Salon (){

    function createData(username, content, dateTime, isReceived, isView) {
        return { username, content, dateTime, isReceived, isView };
    }

    const rows = [
        createData('Alan', 'zfsfgsz', '15.12.21', 'yes','no'),
        createData('Laura', 'Jambon Beure', '24.11.21', 'yes','yes'),
        createData('Jamie', 'ok à toute', '19.10.21', 'yes','yes'),
    ];

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
                <Card>
                    <CardContent>
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableBody>
                                    {rows.map((row) => (
                                                <TableRow
                                                    key={row.username}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell align="right"><Link>{row.username}</Link></TableCell>
                                                    <TableCell align="right">{row.content}</TableCell>
                                                    <TableCell align="right">{row.dateTime}</TableCell>
                                                    <TableCell align="right">{row.isReceived}</TableCell>
                                                    <TableCell align="right">{row.isView}</TableCell>
                                                </TableRow>

                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>


    )
}

export default Salon;
