import React, {useEffect, useState} from 'react';
import {
    Card,
    CardContent,
    Link
} from "@mui/material";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {getUserOnValue} from "../../../api/database/user";

function Salon() {

    function createData(pseudo) {
       return {pseudo};
    }

    const rows = [
        createData('Alan'),
        createData('Laura'),
        createData('Jamie')
    ];

    const [user, setUser] = useState({})

    function getUserSalon(){
        const mess = getUserOnValue();
        mess.then((value) => {
            setUser(value);
            console.log(value)
        })
    }


    useEffect(()=>{
        getUserSalon();
        console.log("Value")
        console.log(user)
    },[])


    const listUser = (list) => {
        return(
            list.map((mes) =>(
                    <li key={mes.key}> {mes.data.pseudo} </li>
                )
            )
        )
    }


    return (

        <Card>
            <h2>Salon de discussion</h2>
            <CardContent>
                <TableContainer>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Username</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                           <ul>{listUser(user)}</ul>
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}

export default Salon;
