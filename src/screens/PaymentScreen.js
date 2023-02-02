import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import FormContainer from '../components/FormContainer'
// import { savePaymentMethod } from '../actions/cartActions' 
import  CheckoutSteps  from '../components/CheckoutSteps'


function PaymentScreen() {

    const navigate = useNavigate();
    const cart = useSelector(state => state.cart )
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const[paymentMethod, setPaymentMethod] = useState('Stripe')

    if(!shippingAddress.address){
        navigate('/shipping')
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        // dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
    }

  return (
    <>
    <div>
    <CheckoutSteps step1 step2 step3 />
    </div>
    <div>
      Payment
    </div>
    </>
  )
}


// return (
//     <FormContainer>
//       <CheckoutSteps step1 step2 step3 />
//     </FormContainer>
//   )
// }

export default PaymentScreen
