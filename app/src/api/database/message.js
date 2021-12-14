import {ref, push, set, onValue, child, get} from "firebase/database";
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
            console.log(snapshots);
            snapshots.forEach(snapshot => {
                console.log(snapshot.key);
                console.log(snapshot.val());
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

//
export function getMessages() {
    const refMessages = ref(database);
    get(child(refMessages, `messages/`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

