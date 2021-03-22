export function login(userData) {
    return {
        type: "user/login",
        payload: userData
    }
}

export function logout() {
    return {
        type: "user/logout"
    }
}