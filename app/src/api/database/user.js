import {onAuthStateChanged} from "firebase/auth";
import {auth, database} from "../configFirebase";
import {ref, query, orderByChild, onValue, onDisconnect, serverTimestamp, push, set} from "firebase/database";

function getRefUser(url="") {
    return ref(database, `user/${url}`);
}


export function getUser() {
    return new Promise(resolve => {
        onAuthStateChanged(auth, user => {
            if (!user) resolve(false);
            resolve(user);
        });
    });
}

export function orderByPseudo() {
    return query(getRefUser(), orderByChild('pseudo'));
}

export function IsConnect() {
    const connectedRef = ref(database, ".info/connected");
    onValue(connectedRef, (snap) => {
        if (snap.val() === true) {
            console.log("connected");
        } else {
            console.log("not connected");
        }
    });
}


export function getLastTimeConnect() {
    onDisconnect(getRefUser("users/joe/lastOnline")).set(serverTimestamp());
}


export function getTimeLatence() {
    const offsetRef = ref(database, ".info/serverTimeOffset");
    onValue(offsetRef, (snap) => {
        const offset = snap.val();
        return (new Date().getTime() + offset);
    });
}


export function systemConnect(){

    const myConnectionsRef = ref(database, 'users/joe/connections');
    // stors the timestamp of my last disconnect (the last time I was seen online)
    const lastOnlineRef = ref(database, 'users/joe/lastOnline');

    const connectedRef = ref(database, '.info/connected');
    onValue(connectedRef, (snap) => {
        if (snap.val() === true) {
            // We're connected (or reconnected)! Do anything here that should happen only if online (or on reconnect)
            const con = push(myConnectionsRef);

            // When I disconnect, remove this device
            onDisconnect(con).remove();

            // Add this device to my connections list
            // this value could contain info about the device or a timestamp too
            set(con, true);

            // When I disconnect, update the last time I was seen online
            onDisconnect(lastOnlineRef).set(serverTimestamp());
        }
    });
}
