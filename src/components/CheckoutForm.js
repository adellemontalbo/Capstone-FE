// import React, { useSelector } from 'react'
// import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

// const stripePromise = loadStripe('pk_test_51MYY2MKdVmrdthj1uzXli78mrepAOGqCL0Fa6YLkMoli913xSVXqoj8pHZXqv5I6uPj1YrWs30OvLslS2vRmCmci00C2gI9GNu')

// const CheckoutForm = () => {

//   const orderCreate = useSelector((state )=> state.orderCreate)
//   const { order, error, success } = orderCreate

//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     // We don't want to let default form submission happen here,
//     // which would refresh the page.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not yet loaded.
//       // Make sure to disable form submission until Stripe.js has loaded.
//       return;
//     }

//     const result = await stripe.confirmPayment({
//       //`Elements` instance that was used to create the Payment Element
//       elements,
//       confirmParams: {
//         return_url: `http://localhost:3000/order/${order.id}`,
//       },
//   });

//     if (result.error) {
//       // Show error to your customer (for example, payment details incomplete)
//       console.log(result.error.message);
//     } else {
//       // Your customer will be redirected to your `return_url`. For some payment
//       // methods like iDEAL, your customer will be redirected to an intermediate
//       // site first to authorize the payment, then redirected to the `return_url`.
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <PaymentElement />
//       <button>Submit</button>
//     </form>
//   )
// };

// export default CheckoutForm;