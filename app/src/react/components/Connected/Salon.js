import React, {useEffect, useState} from 'react';
import {
    Card,
    CardContent,
    Button
} from "@mui/material";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {getUserOnValue} from "../../../api/database/user";

function Salon({userLocal,setUserLocal}) {

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
        if(list.length > 0) {
            return(
                list.map((mes) =>(
                    <div>
                        <li key={mes.key}> {mes.data.pseudo} </li>
                        <button onClick={ () => { setUserLocal(mes.data);
                        console.log("userLocal")
                            console.log(userLocal); } } name="button">Discuter</button>
                    </div>
                    )
                )
            )
        }
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
                           <ul>
                               {listUser(user)}
                           </ul>
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}

export default Salon;
