import React from 'react';

function Chat (){

    return (
        <>
        <div>
            <span>User : User 1</span>
        </div>

        <form id="input_zone">
            <input id="message" className="vertical-align" type="text"/>
            <button id="send_message" className="vertical-align" type="button">Send</button>
        </form>
        </>
    )

}

export default Chat;
