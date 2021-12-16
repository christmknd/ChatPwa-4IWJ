import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithRedirect} from "firebase/auth";
import {auth, database} from "./configFirebase";
import {ref, set} from "firebase/database";
import 'firebaseui/dist/firebaseui.css'

/// Login


// Good
// Test Bouton Login avec 2 parametre
// Return User
export function login(email, password) {
    console.log("login")
    console.log(email)
    return signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
            console.log(user)
            return user;
        }).catch((error) => console.error(error));
}

// Good
// Test Bouton Logout
export function logout() {
    signOut(auth).then(() => {
        console.log("logOut")
    }).catch((error) => {
        console.error(error)
    });
}



//// REGISTER


export function register(pseudo, email, password) {
    console.log("register")
    console.log(pseudo)
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            set(ref(database, `users/${userCredential.user.uid}`), {
                email, password, pseudo
            });
            console.log(userCredential)
            console.log(userCredential.user)
            return userCredential.user;

        });
}

