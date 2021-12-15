import {ref, push, set, onValue, child, get, remove, increment, update, onDisconnect} from "firebase/database";
import {database} from "../configFirebase"

function getRefMessages(url="") {
    return ref(database, `messages/${url}`);
}



export function createMessage(idUserFrom, idUserTo, content, dateTime, isReceived, isView) {
    const newKey = push(getRefMessages()).key;

    set(getRefMessages(newKey),
        {id : newKey, idUserFrom, idUserTo, content, dateTime, isReceived, isView});
}

// Ecoute le chemin /message et récupere les messages
// Stocke en Local (onlyOnce)
export function getMessagesOnValue() {
    const todos = [];

    return new Promise(resolve => {
        onValue(getRefMessages(), (snapshots) => {
            console.log('snapshots');
            snapshots.forEach(snapshot => {
                todos.push({
                    key: snapshot.key,
                    data: snapshot.val()
                });
            });
            resolve(todos);
        },{
            onlyOnce: true
        });
    });
}

// Recupere Messages
export function getMessages() {
    const refMessages = ref(database);
    get(child(refMessages, `messages/`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            return snapshot.val();
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}


// Delete Message
export function deleteMessageId(IdKey) {
    remove(getRefMessages(IdKey));
}


// Add One Like to Message
export function likeMessage(uid, key) {
    const updates = {};
    updates[`message/${key}/like`] = increment(1);
    update(ref(database), updates)
}

// Message de deconnexion
export function messageOnDisconnect(){
    const presenceRef = ref(database, "disconnectmessage");
    onDisconnect(presenceRef).set("I disconnected!");
}


