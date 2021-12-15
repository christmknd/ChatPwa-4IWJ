import React from 'react';
import {
    Card,
    CardContent,
    Link
} from "@mui/material";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";


function Salon() {

    function createData(username, content, dateTime, isReceived, isView) {
        return {username, content, dateTime, isReceived, isView};
    }

    const rows = [
        createData('Alan', 'zfsfgsz', '15.12.21, 15:00', 'yes', 'no'),
        createData('Laura', 'Jambon Beure', '24.11.21, 23:45', 'yes', 'yes'),
        createData('Jamie', 'ok à toute', '19.10.21, 10:26', 'yes', 'yes'),
    ];

    return (

        <Card>
            <h2>Salon de discussion</h2>
            <CardContent>
                <TableContainer>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
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
    )
}

export default Salon;
