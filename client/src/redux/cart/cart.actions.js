import {cartActions} from './cart.actionTypes';
import {isSignOutSuccess} from '../../redux/user/user.actions';

export const toggleHiddenCart = () => ({
    type: cartActions.TOGGLE_HIDDEN_CART
})
export const toggleModalBox = () => ({
    type: cartActions.TOGGLE_MODAL_BOX
})

export const addItem = item => ({
    type: cartActions.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: cartActions.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: cartActions.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const resetCart = () =>( {
    type: cartActions.RESET_CART
})

export const resetCartAndSetSignOutSuccess = () => {
    return dispatch => {
        dispatch(resetCart())
        dispatch(isSignOutSuccess())
    }
}