import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
export const selectModalBoxHidden = createSelector(
    [selectCart],
    cart => cart.modalBoxHidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>  cartItems.reduce((accumulatedValue,cartitem) => (accumulatedValue + cartitem.quantity * cartitem.price) ,0) 
)

export const getCartItemCount = createSelector(
    [selectCartItems],
    cartItems =>  cartItems.reduce((accumulatedValue,cartitem) => (accumulatedValue + cartitem.quantity) ,0) 
)

