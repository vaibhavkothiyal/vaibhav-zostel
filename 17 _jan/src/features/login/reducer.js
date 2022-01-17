import { LOGIN_LOADING, LOGIN_SUCCES, LOGIN_ERROR } from "./actionTypes";

const initialState = {
    loading: false,
    token: "",
    error: false,
};

// let tokenIs = localStorage.getItem('userToken');
// tokenIs=JSON.parse(tokenIs);
// if(tokenIs) initialState.token=tokenIs


export const loginReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN_LOADING:
            return {
                ...state,
                loading: true
            }

        case LOGIN_SUCCES:
            localStorage.setItem('userToken', JSON.stringify(action.payload.token))
            return {
                ...state,
                token: action.payload.token,
                loading: false
            }

        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }  

        default:
            return state;
    }
}