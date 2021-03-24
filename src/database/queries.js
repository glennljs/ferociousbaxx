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
                const data = doc.data();
                return { id: doc.id, title: data.title, image: data.image };
            });
        });
}

export function editItem(id, newData) {
    return database
        .collection("items")
        .doc(id)
        .set(newData);
}

export function deleteItem(id) {
    return database
        .collection("items")
        .doc(id)
        .delete();
}

export function addItem(id, data) {
    return database
        .collection("items")
        .doc(id)
        .set(data);
}