const loginReducer = (state = { isFirstTimeLogin : true}, action) => {
    switch(action.type){
        case "SET_FIRST_TIME_LOGIN_DONE":
            return {
                ...state,
                isFirstTimeLogin: false
            } 
        default: 
            return state;
    }
}

export default loginReducer