import { ref, push, set, onChildAdded, onValue } from "firebase/database";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import auth from "./configFirebase"
import database from "./configFirebase"



export function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
        .then(({ user: { uid, email } }) => {
            set(ref(database, `/users/${uid}`), {
                email
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
