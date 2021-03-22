import { createStore } from "redux";

const initialState = {
  userData: {},
  isLoggedIn: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "user/login":
      const newState = {
        ...state,
        userData: action.payload,
        isLoggedIn: true
      };
      console.log(newState);
      return newState;
    case "user/logout":
      return {
        ...state,
        userData: {},
        isLoggedIn: false
      }
    default:
      return state;
  }
}

export default createStore(reducer);