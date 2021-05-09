export const addItemToCart = (cartItems, itemToBeAdded) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToBeAdded.id)
    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === itemToBeAdded.id
             ? {...cartItem,quantity:cartItem.quantity + 1}
            : cartItem       
        )
    }
    return [...cartItems, {...itemToBeAdded, quantity: 1}]
}

export const removeItemFromCart = (cartItems, item) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id)
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== item.id )
    }
    return cartItems.map(
        cartItem =>
         cartItem.id === item.id ? 
         {...cartItem, quantity: cartItem.quantity - 1}
         : cartItem)
}

export const getCartWithoutItem = ( cartItems , itemToBeRemoved) => {
    return cartItems.filter(cartItem => cartItem.id !== itemToBeRemoved.id)
}