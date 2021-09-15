import { SET_USERNAME, SET_FIRST_TIME_LOGIN_DONE } from "./actionTypes";
//create reducer for Login logic, and declaring functions
const loginReducer = (state = { isFirstTimeLogin : true, username:''}, action) => {
    switch(action.type){
        case SET_FIRST_TIME_LOGIN_DONE:
            return {
                ...state,
                isFirstTimeLogin: false,
            }
        case SET_USERNAME:
            return{
                ...state,
                username: action.payload, 
            } 
        default: 
            return state;
    }
}

export default loginReducer