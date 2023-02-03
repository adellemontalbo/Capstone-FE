import React, { useState, useEffect } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { savePaymentMethod } from '../actions/cartActions' 
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
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
    }


return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />

      <Form onSubmit={submitHandler}>
        <Form.Group>
            <Form.Label as='legend'>Select Method</Form.Label>
            <Col>
                <Form.Check
                type='radio'
                label='Stripe'
                id='stripe'
                name='paymentMethod'
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
            </Col>
        </Form.Group>
        
        <Button type='submit' variant='primary'>
            Continue
        </Button>

      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
