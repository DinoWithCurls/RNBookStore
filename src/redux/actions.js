const deleteFromCart = (item) => {
    return {
        type: "DELETE_FROM_CART",
        payload : item
    }
}

const addToCart = (item) => {
    return {
        type: "ADD_TO_CART",
        payload : item
    }
}

const createList = (data) =>{
    return {
        type: "CREATE_LIST",
        payload : data
    }
}
const setFirstTimeLoginDone = () => {
    return {
        type: "SET_FIRST_TIME_LOGIN_DONE"
    }
}


export  {
    deleteFromCart,
    addToCart,
    createList,
    setFirstTimeLoginDone
}