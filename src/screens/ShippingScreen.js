import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions' 

function ShippingScreen() {
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart )
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('submitted')
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        navigate('/payment')
    }

    //TO REMOVE WHEN I HAVE FORM CONTAINER:
    return(
        <div>
            SHIPPING
        </div>
    )}

//TO ADD WHEN FORM CONTAINER MADE
//     return (
//         <FormContainer>
//             <h1>Shipping</h1>
//             <Form onSubmit={submitHandler}>

//                 <Form.Group controlId='address'>
//                     <Form.Label>Address</Form.Label>
//                     <Form.Control
//                     required
//                     type='text'
//                     placeholder='Please enter address'
//                     value={address ? address : ''}
//                     onChange={(e) => setAddress(e.target.value)}
//                     >
//                     </Form.Control>
//                 </Form.Group>


//                 <Form.Group controlId='city'>
//                     <Form.Label>City</Form.Label>
//                     <Form.Control
//                     required
//                     type='text'
//                     placeholder='Please enter city'
//                     value={city ? city : ''}
//                     onChange={(e) => setCity(e.target.value)}
//                     >
//                     </Form.Control>
//                 </Form.Group>

//                 <Form.Group controlId='postalCode'>
//                     <Form.Label>Postal Code</Form.Label>
//                     <Form.Control
//                     required
//                     type='text'
//                     placeholder='Please enter postal code'
//                     value={postalCode ? postalCode : ''}
//                     onChange={(e) => setPostalCode(e.target.value)}
//                     >
//                     </Form.Control>
//                 </Form.Group>

//                 <Form.Group controlId='country'>
//                     <Form.Label>Country</Form.Label>
//                     <Form.Control
//                     required
//                     type='text'
//                     placeholder='Please enter postal code'
//                     value={country ? country : ''}
//                     onChange={(e) => setCountry(e.target.value)}
//                     >
//                     </Form.Control>
//                 </Form.Group>

//                 <Button type='submit' variant='primary' >
//                     Continue
//                 </Button>

//             </Form>
//         </FormContainer>
//   )
// }

export default ShippingScreen
