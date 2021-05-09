import React from 'react'
import {connect} from 'react-redux';

import { 
    CartIconContainer,
    ShoppingIconContainer,
    ItemCountContainer 
} from './CartIcon.styles';


import { toggleHiddenCart,toggleModalBox } from '../../redux/cart/cart.actions';
import {getCartItemCount} from '../../redux/cart/cart.selectors'

const CartIcon = ({toggleHiddenCart, itemCount,isEnabled,toggleModalBox}) => (
    <CartIconContainer onClick={isEnabled ? toggleHiddenCart : toggleModalBox }>
           <ShoppingIconContainer />
           <ItemCountContainer >{itemCount}</ItemCountContainer>     
    </CartIconContainer>
    )


const mapDispatchToProps = dispatch => ({
    toggleHiddenCart: () => dispatch(toggleHiddenCart()),
    toggleModalBox: () => dispatch(toggleModalBox())
})    

const mapStateToProps = state => ({
    itemCount: getCartItemCount(state)
})  

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);