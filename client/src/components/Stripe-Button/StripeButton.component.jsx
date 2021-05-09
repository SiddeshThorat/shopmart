import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IiXcKSFk7Z26M7478iYuYPWWzYMq0Mx802AXy3NtxxkDwI0xbzt0XUSNZ3RYHyai1O30x8FuWWNKBkjcU6nm7ZB00M4UeeTLj'
    const onToken = token => {
            axios({
              url: 'payment',
              method: 'post',
              data: {
                amount: priceForStripe,
                token: token
              }
            })
              .then(response => {
                alert('succesful payment');
              })
              .catch(error => {
                alert(
                  'There was an issue with your payment'
                );
              });
    };
   return(
       <StripeCheckout 
         label='Pay Now'
         name='shopmart'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is ${price} `}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
       />
   )
}

export default StripeCheckoutButton;