//Create actions
import {ADD_TO_CART, SET_USERNAME, DELETE_FROM_CART, CREATE_LIST, SET_FIRST_TIME_LOGIN_DONE} from './actionTypes';
const deleteFromCart = (item) => {
    return {
        type: DELETE_FROM_CART,
        payload : item
    }
}
const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload : item
    }
}

const createList = (data) =>{
    return {
        type: CREATE_LIST,
        payload : data
    }
}
const setFirstTimeLoginDone = () => {
    return {
        type: SET_FIRST_TIME_LOGIN_DONE
    }
}

const setUsername = (username) => {
    return{
        type: SET_USERNAME,
        payload: username
    }
}

export  {
    deleteFromCart,
    addToCart,
    createList,
    setUsername,
    setFirstTimeLoginDone
}