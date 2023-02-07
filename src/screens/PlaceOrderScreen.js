import React, { useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import  CheckoutSteps  from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'

//DOUBLE CHECK I NEED ID, USEPARAMS() AND THAT I NEED TO USE IT IN USE EFFECT

function PlaceOrderScreen() {

    const orderCreate = useSelector((state )=> state.orderCreate)
    const { order, error, success } = orderCreate
    
   
    //THIS NEEDS WORK
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const cart = useSelector((state) => state.cart)

    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    cart.shippingPrice = (cart.itemsPrice > 100 ? 10 : 5).toFixed(2)
    cart.taxPrice = Number((0.08) * cart.itemsPrice).toFixed(2)
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)
    
    //NEED TO CHECK IF THIS WORKS - how to unchekc radio dial?
    //Idon't think we need - we can get payment from storage
    // if(!cart.paymentMethod){
    //     navigate('/payment')
    // }

    //Getting error: Uncaught TypeError: Cannot read property 'id' of undefined
    //The problem is the backend - not receiving back "order"
    //"POST /api/orders/add/ HTTP/1.1" 500 116885 -RESOLVED: bug was in orderserializer in shippingAddress


    
    //NEEDS WORK
    useEffect(() =>{
        if(success){
            navigate(`/order/${order.id}`)
            // dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [success, navigate ])

    const placeOrder = () => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice
        }))
        console.log('Order placed')
    }

    // console.log(`this is my order:${order.id}`)
    
    

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h2>Shipping</h2>

                    <p>
                        <strong>Shipping: </strong>
                        {cart.shippingAddress.address},{cart.shippingAddress.city},
                        {' '}
                        {cart.shippingAddress.postalCode}
                        {' '}
                        {cart.shippingAddress.country}
                    </p>
                </ListGroup.Item>

                <ListGroup.Item>
                    <h2>Payment Method</h2>

                    <p>
                        <strong>Payment Method: </strong>
                        {cart.paymentMethod}
                    </p>
                </ListGroup.Item>


                <ListGroup.Item>
                    <h2>Order Items</h2>

                    {cart.cartItems.length === 0 ? <Message variant='info'>Your cart is empty</Message>
                    : (
                        <ListGroup variant='flush'>
                        {cart.cartItems.map((item, index) => (
                            <ListGroup.Item key={index}>
                                <Row>
                                    <Col md={1}>
                                    <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>

                                    <Col>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>

                                    <Col md={4}>
                                        {item.qty} X ${item.price} = ${(item.qty * item.price).toFixed(2)}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}  
                        </ListGroup>
                    )}

                </ListGroup.Item>
                    </ListGroup>
                 </Col>   
                 <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Items:</Col>
                                    <Col>${cart.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping:</Col>
                                    <Col>${cart.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax:</Col>
                                    <Col>${cart.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Total:</Col>
                                    <Col>${cart.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                    {error && <Message variant='danger'>{error}</Message>}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button 
                                type='button'
                                className='btn-block'
                                disabled={cart.cartItems === 0}
                                onClick={placeOrder}>
                                    Place Order
                                </Button>
                            </ListGroup.Item>

                      </ListGroup>
                  </Card>
                 </Col>   
            </Row>
        </div>
    )
}

export default PlaceOrderScreen
