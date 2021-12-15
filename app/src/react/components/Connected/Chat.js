import React, {useContext, useEffect, useState} from 'react';
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
import UserContext from "../../context/UserContext";
import {login} from "../../../api/authentification";
import {createMessage, getMessages, getMessagesOnValue} from "../../../api/database/message";

function Chat({userTo}) {

    const {selectors} = useContext(UserContext);


    const [content, setContent] = useState("")
    const [messages, setMessages] = useState({})

    const user = selectors.getUser();
    console.log("user")
    console.log(user)


    function getMessage(){
        const mess = getMessagesOnValue();
        mess.then((value) => {
            setMessages(value);
        })
    }

    const handleChangeContent = (event) => {
        setContent(event.target.value);
    }

    useEffect(()=>{
        getMessage()
    },[content])

    async function handleSubmit(event) {
        event.preventDefault();
        createMessage(user.uid, "userTo.uid", content, "dateTime", false, false)
        setContent("");
        console.log("messages")

        console.log(messages)
        console.log("content")

        console.log(content)
    }

    const listMessage = (list) => {
        if(list.length >0) {
            return (
                list.map((mes) => (
                        <li key={mes.key}> {mes.data.content} </li>
                    )
                )
            )
        }
    }

    return (
        <Card>
            <h2>UserTo : Conversation</h2>
            <CardContent>
                <Box>
                    <form method="post" onSubmit={handleSubmit}>
                        <label>
                            Message :
                            <input type="text" name="content" value={content} onChange={handleChangeContent}/>
                        </label><br/>
                        <input type="submit" value="Envoyer"/>
                    </form>

                    <TableContainer>
                        <TableHead>
                            <TableRow>
                                <TableCell>Username</TableCell>
                                <TableCell align="right">Message</TableCell>
                                <TableCell align="right">DateTime</TableCell>
                                <TableCell align="right">Recu</TableCell>
                                <TableCell align="right">Lu</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listMessage(messages)}
                        </TableBody>
                    </TableContainer>
                </Box>
            </CardContent>
        </Card>
    )

}

export default Chat;
