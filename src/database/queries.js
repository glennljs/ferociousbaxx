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