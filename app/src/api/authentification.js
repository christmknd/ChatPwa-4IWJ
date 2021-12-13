import {onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import auth from "./configFirebase";

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
            return user;
        });
}

export function getUser() {
    return new Promise(resolve => {
        onAuthStateChanged(auth, user => {
            if (!user) resolve(false);
            resolve(user);
        });
    });
}
