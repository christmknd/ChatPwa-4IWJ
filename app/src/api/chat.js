// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYVxQAFZcaT2eFg7Krjgah4eyRvctNkxw",
    authDomain: "chatpwa-4iwj.firebaseapp.com",
    projectId: "chatpwa-4iwj",
    databaseURL: "https://chatpwa-4iwj-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "chatpwa-4iwj.appspot.com",
    messagingSenderId: "961052339867",
    appId: "1:961052339867:web:e83f8c5e4f08ad34f1a03e",
    measurementId: "G-VZR5RXV8PN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);


export function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
        .then(({ user: { uid, email } }) => {
            set(ref(database, `/users/${uid}`), {
                email
            });
        });
}

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

export function createTodo(todo = {}) {
    const messages = ref(database, '/messages');
    const newKey = push(messages).key;

    set(ref(database, `/messages/${newKey}`), { ...todo, plop: [ 1,2,3 ]});
}

export function getTodos() {
    const todos = [];
    const messages = ref(database, '/messages');

    return new Promise(resolve => {
        onValue(messages, (snapshots) => {
            console.log(snapshots);
            snapshots.forEach(snapshot => {
                todos.push({
                    key: snapshot.key,
                    data: snapshot.val()
                });
            });

            resolve(todos);
        });
    });
}
