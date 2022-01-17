import { createStore, combineReducers } from "redux";
import { loginReducer } from "./features/login/reducer";

const rootReducer=combineReducers({
    login:loginReducer
});

export const store=createStore(rootReducer);
// console.log(store.getState())