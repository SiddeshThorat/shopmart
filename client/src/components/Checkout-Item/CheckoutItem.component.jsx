import React from 'react'
import { connect } from 'react-redux';

import {
     CheckoutItemContainer,
     ImageContainer,
     Image,
     NameContainer,
     QuantityContainer,
     ArrowContainer,
     ValueContainer,
     PriceContainer,
     RemoveButtonContainer
} from './CheckoutItem.styles'

import { 
    clearItemFromCart,
    removeItem,
    addItem 
} from '../../redux/cart/cart.actions'

const CheckoutItem = ({cartItem, clearItem,addItem,removeItem }) => {
    const {name, quantity, price, imageUrl} = cartItem
    return(
    <CheckoutItemContainer>
        <ImageContainer>
            <Image src={imageUrl} alt='item' /> 
        </ImageContainer>
        <NameContainer>{name}</NameContainer>
        <QuantityContainer>
            <ArrowContainer onClick={() => removeItem(cartItem)}>&#10094;</ArrowContainer>
            <ValueContainer>{quantity}</ValueContainer>
            <ArrowContainer onClick={() => addItem(cartItem)}>&#10095;</ArrowContainer>
        </QuantityContainer>
        <PriceContainer>{price}</PriceContainer>

        <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
)}

const mapDispatchToProps = (dispatch) => ({
   clearItem : (item) => dispatch(clearItemFromCart(item)),
   removeItem :(item) => dispatch(removeItem(item)),
   addItem : (item) => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);