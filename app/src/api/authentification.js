import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth, database} from "./configFirebase";
import {ref, set} from "firebase/database";


export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
            return user;
        });
}

export function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
        .then(({ user: { uid, email } }) => {
            set(ref(database, `/users/${uid}`), {
                email
            });
        });
}

