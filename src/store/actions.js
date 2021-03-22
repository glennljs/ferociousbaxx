export function login(userData) {
    return {
        type: "user/login",
        payload: userData
    }
}