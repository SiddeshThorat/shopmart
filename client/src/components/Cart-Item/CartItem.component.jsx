import React from 'react'
import {
CartItemContainer,
ImageContainer,
ItemDetailsContainer,
NameContainer,
PriceContainer } from './CartItem.styles'


const CartItem = ({imageUrl, name, price, quantity}) => (
    <CartItemContainer>
        <ImageContainer src={`${imageUrl}`} alt='item' /> 
        <ItemDetailsContainer >
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{quantity} x Rs. {price}</PriceContainer>
        </ItemDetailsContainer>
    </CartItemContainer>
)


export default React.memo(CartItem);