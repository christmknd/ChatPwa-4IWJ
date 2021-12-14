import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../configFirebase";


export function getUser() {
    return new Promise(resolve => {
        onAuthStateChanged(auth, user => {
            if (!user) resolve(false);
            resolve(user);
        });
    });
}
