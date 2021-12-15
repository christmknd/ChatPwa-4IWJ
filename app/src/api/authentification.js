import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithRedirect} from "firebase/auth";
import {auth, database} from "./configFirebase";
import {ref, set} from "firebase/database";
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

/// Login

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(auth);

const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
        auth.EmailAuthProvider+"firebase",
        {
            provider: auth.GoogleAuthProvider+"",
            scopes: [
                'https://www.googleapis.com/auth/contacts.readonly'
            ],
            customParameters: {
                // Forces account selection even when one account
                // is available.
                prompt: 'select_account'
            }
        },
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
};

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container-auth', uiConfig);


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

