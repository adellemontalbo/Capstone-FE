import React, { useState, useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getOrderDetails, payOrder } from '../actions/orderActions'

import getStripe from '../actions/getStripe'





function OrderScreen() {


    const navigate = useNavigate()
    const { id } = useParams();
    const dispatch = useDispatch()

    // const orderDetails = useSelector(state => state.orderDetails)
    // const { order, error, loading } = orderDetails

    // const orderPay = useSelector(state => state.orderPay)
    // const { loading: loadingPay, success: successPay } = orderPay

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const [isPaid, setIsPaid] = useState('paid')

    const cart = useSelector((state) => state.cart)

    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    cart.shippingPrice = (cart.itemsPrice > 100 ? 10 : 5).toFixed(2)
    cart.taxPrice = Number((0.08) * cart.itemsPrice).toFixed(2)
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)
    

    // const addStripeScript = () => {
    //     const script = document.createElement('script')
    //     script.type = 'text/javascript'
    //     script.src = 'src="https://js.stripe.com/v3"'
    //     script.async = true
    //     script.onload = () => {
    //         setSdkReady(true)
    //     const stripe = await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx')
    //     }
    //     document.body.appendChild(script)
    // }

    // useEffect(() => {

    
    //     if (!order || successPay || order._id !== Number(order.id)) {
    //         dispatch({ type: ORDER_PAY_RESET })

    //         dispatch(getOrderDetails(order.id))
      
    //         addStripeScript()
       
    //     }
    // }, [dispatch, order, order.id, successPay])



    useEffect(() => {
        if (!cart) {
            dispatch(getOrderDetails(id))
        }
    }, [dispatch, cart, id, isPaid])

    const handleCheckout = () => {
        setIsPaid('unpaid')
    }

//     return(<div>
//         <h1>Order: 1</h1>
//         <h2>Shipping</h2>
//     <p><strong>Name: </strong> {userInfo.name}</p>
//     <p><strong>Email: </strong><a href={`mailto:${userInfo.email}`}>{userInfo.email}</a></p>
//     <p>
//                                     <strong>Shipping To: </strong>
//                                     {cart.shippingAddress.address},  {cart.shippingAddress.city}
//                                     {'  '}
//                                     {cart.shippingAddress.postalCode},
//                             {'  '}
//                                     {cart.shippingAddress.country}
//                                 </p>
//   </div>)

return (
            <div>
                <h1>Order: 1</h1>
                <Row>
                    <Col md={8}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Shipping</h2>
                                <p><strong>Name: </strong> {userInfo.user.name}</p>
                                <p><strong>Email: </strong><a href={`mailto:$userInfo.user.email}`}>{userInfo.user.email}</a></p>
                                <p>
                                    <strong>Shipping To: </strong>
                                    {cart.shippingAddress.address},  {cart.shippingAddress.city}
                                    {'  '}
                                    {cart.shippingAddress.postalCode},
                            {'  '}
                                    {cart.shippingAddress.country}
                                </p>

                            </ListGroup.Item>

                            <ListGroup.Item>
                                <h2>Payment Method</h2>
                                <p>
                                    <strong>Method: </strong>
                                    {cart.paymentMethod}
                                </p>
                                {isPaid === 'paid' ? (
                                    <Message variant='success'>This order has been paid for</Message>
                                ) : (
                                        <Message variant='warning'>This order has not been paid for</Message>
                                    )}

                            </ListGroup.Item>

                            <ListGroup.Item>
                                <h2>Order Items</h2>
                                {cart.cartItems.length === 0 ? <Message variant='info'>
                                    No items in order
                        </Message> : (
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
                                        <Col>${userInfo.itemsPrice}</Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Shipping:</Col>
                                        <Col>${userInfo.shippingPrice}</Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Tax:</Col>
                                        <Col>${userInfo.taxPrice}</Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Total:</Col>
                                        <Col>${userInfo.totalPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                               
                                <ListGroup.Item>
                                <button type="button" className="btn btn-primary" onClick={handleCheckout}>Make payment</button>
                                </ListGroup.Item>
                                           
                             </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    
  
}

export default OrderScreen


// return (<div> 
    
//     <h1>Order: 1</h1>
//       <h2>Shipping</h2>
//     <p><strong>Name: </strong> {userInfo.name}</p>
//     <p><strong>Email: </strong><a href={`mailto:${userInfo.email}`}>{userInfo.email}</a></p>
//     <p>
//         <strong>Shipping To: </strong>
//         {userInfo.shippingAddress.address},  {userInfo.shippingAddress.city}
//         {'  '}
//         {userInfo.shippingAddress.postalCode},
//   {'  '}
//         {userInfo.shippingAddress.country}
//     </p>
//   </div>)
  

// {order.isDelivered ? (
//     <Message variant='success'>Delivered on {order.deliveredAt}</Message>
// ) : (
//         <Message variant='warning'>Not Delivered</Message>
//     )}

// {!order.isPaid && (
//     <ListGroup.Item>
//         {loadingPay && <Loader />}

//         {!sdkReady ? (
//             <Loader />
//         ) : (
//             <button type="button" className="btn btn-primary" onClick={handleCheckout}>Make payment</button>
//             )}
//     </ListGroup.Item>)}