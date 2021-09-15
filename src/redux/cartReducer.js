import {ADD_TO_CART, DELETE_FROM_CART} from './actionTypes';
//create reducers for cart, and declaring functions that can be called via these reducers.
const cartReducer = (state = { cart : []}, action) => {
    switch(action.type){
        case DELETE_FROM_CART:
            return deleteItemFromCart(state, action);
        case ADD_TO_CART:
            return addToCart(state, action);
        default: 
            return state;
    }
}
const addToCart = ( state, action)=>{
    console.log('add to cart called', action.payload.id);
    
    return {
        ...state,
        cart: [...state.cart, action.payload]
    } ;
}
const deleteItemFromCart = (state, action)=>{
    const book = action.payload;
    const initSet = [...state.cart];
    const filteredSet = initSet.filter(item => item.id != book.id);
    return {
        ...state,
        cart: filteredSet
    } ;

}
export default cartReducer
