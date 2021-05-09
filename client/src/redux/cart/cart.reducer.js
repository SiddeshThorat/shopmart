import {cartActions} from './cart.actionTypes';
import { addItemToCart ,getCartWithoutItem, removeItemFromCart} from './cart.util';


const INITIAL_STATE ={
    hidden: true,
    cartItems: [],
    modalBoxHidden: true
}
const cartReducer = ( state = INITIAL_STATE , action) => {
    switch(action.type){
        case cartActions.TOGGLE_HIDDEN_CART:
             return {
                 ...state,
                hidden: !state.hidden
             }
        case cartActions.TOGGLE_MODAL_BOX:
            return {
                    ...state,
                    modalBoxHidden: !state.modalBoxHidden
                } 
        case cartActions.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
            
        case cartActions.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }     
            
        case cartActions.CLEAR_ITEM_FROM_CART:
              return{
                  ...state,
                  cartItems : getCartWithoutItem(state.cartItems,action.payload)
              }
        case cartActions.RESET_CART:
            return {
                ...state,
                cartItems: []
            }         
            
        default:
          return state;
    }
}

export default cartReducer;