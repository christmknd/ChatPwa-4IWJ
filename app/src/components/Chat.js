import React from 'react';
import {} from '../'
import {getMessagesOnValue} from "../api/database/message";

function Chat (){

    //const messages = getMessagesOnValue() ;

    return (
        <>


            <span>User : User 1</span>

            <form id="input_zone">
            <input id="message" className="vertical-align" type="text"/>
            <button id="send_message" className="vertical-align" type="button">Send</button>
        </form>
            <h2>Listes des messages</h2>

            <ul>
                <li></li>
            </ul>
        </>
    )

}

export default Chat;
