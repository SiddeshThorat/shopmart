import React from 'react'
import {connect} from 'react-redux';
import {withRouter}from 'react-router-dom'

import {
    CartDropDownContainer,
    CartItemsContainer,
    EmptyMessageContainer,
    CartDropDownButton 
} from './CartDropDown.styles';
import CartItem from '../Cart-Item/CartItem.component';
import { toggleHiddenCart } from '../../redux/cart/cart.actions'
import {selectCartItems} from '../../redux/cart/cart.selectors';

const CartDropDown = ({cartItems, history,toggleHiddenCart}) => (
     <CartDropDownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                            (cartItems.map((cartItem) => (
                                <CartItem {...cartItem}/>
                            ))):
                            (<EmptyMessageContainer>Your Cart is Empty</EmptyMessageContainer>)
                                
                }
                </CartItemsContainer>   
                <CartDropDownButton onClick={() => {
                    history.push('/checkout')
                    toggleHiddenCart()
                } }>
                   CHECKOUT
                </CartDropDownButton>     
        </CartDropDownContainer>
)

const mapStateToProps = state => ({
   cartItems: selectCartItems(state)
})

const mapDispatchToProps = dispatch => ({
    toggleHiddenCart : () => dispatch(toggleHiddenCart())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropDown));