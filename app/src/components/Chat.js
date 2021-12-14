import React from 'react';

function Chat (){

    return (

        <section id="input_zone">
            <input id="message" className="vertical-align" type="text"/>
            <button id="send_message" className="vertical-align" type="button">Send</button>
        </section>
    )

}

export default Chat;
