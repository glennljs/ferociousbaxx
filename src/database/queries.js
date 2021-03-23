import database from './firebase.js';

export function validateLogin(username, password) {
    return database
        .collection("users")
        .doc(username)
        .get()
        .then(snapShot => {
            if (!snapShot.exists) {
                return "Invalid Username, Password";
            }

            const userData = snapShot.data();

            if (password !== userData.password) {
                return "Wrong password!";
            }

            return userData;
        });
}

export function getAllItems() {
    return database
        .collection("items")
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => {
                return { id: doc.id, data: doc.data() };
            });
        });
}

export function updateItem(id, newData) {
    return database
        .collection("items")
        .doc(id)
        .set(newData);
}