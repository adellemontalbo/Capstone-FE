import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51MYY2MKdVmrdthj1uzXli78mrepAOGqCL0Fa6YLkMoli913xSVXqoj8pHZXqv5I6uPj1YrWs30OvLslS2vRmCmci00C2gI9GNu')
  }
  return stripePromise;
};

export default getStripe;