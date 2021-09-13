const listReducer = (state = { list : []}, action) => {
    switch(action.type){
        case "CREATE_LIST":
           return createList(state, action);
        default: 
            return state;
    }
}

const createList = ( state, action)=>{
    return {
        ...state,
        list: action.payload
    } ;
}

export default listReducer;