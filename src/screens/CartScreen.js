import React, { useEffect } from "react";

import { Link, useSearchParams, useParams, useNavigate, redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Image, Row, Col, ListGroup, Button, Card, Form } from 'react-bootstrap'
import  Message  from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

function CartScreen() {
    const navigate = useNavigate();
 	const { id } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const qty = Number(searchParams.get('qty'));
    // console.log(`The quantity is:${qty}`)
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

    useEffect(() => {
    	if (id) {
    		dispatch(addToCart(id, qty));
    		}
    		}, [dispatch, id, qty]);
         
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

//NEED TO FIX THIS
    const checkoutHandler = () => {
        // navigate(`/login?redirect=shipping`)
        navigate('/shipping')
        // if (!login) {
        // redirect('/login?redirect=shipping')
        // } else{
            
        }
        

    return (
        <>
        <Link to='/' className='btn btn-link'>Keep Shopping</Link>
        <Row>
            <Col md ={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message variant='info'>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </Message>
                ):(
                    <ListGroup variant='flush'>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded/>
                                    </Col>

                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>

                                    <Col md={2}>
                                        ${item.price}
                                    </Col>

                                    <Col md={3}>
                                    <Form.Control
                                            as ="select"
                                            value={item.qty}
                                            onChange={(e)=> dispatch(addToCart(item.product, Number(e.target.value)))}
                                        >
                                            {
                                                [...Array(item.countInStock).keys()].map((x)=>(
                                                    <option key={x+1} value={x+1}>
                                                        {x+1}
                                                    </option>
                                                ))
                                            }   
                                        </Form.Control>
                                    </Col>

                                    <Col md={1}>
                                        <Button type='button' variant='light'
                                        onClick={() => removeFromCartHandler(item.product)}>
                                            Remove</Button>

                                    </Col>

                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>

            <Col>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Items ({cartItems.reduce((acc, item) => acc + item.qty, 0)})</h2>  
                        ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                        </ListGroup.Item>
                    </ListGroup>

                    <ListGroup.Item>
                        <Button
                        type='button'
                        className='btn-block'
                        disabled={cartItems.length === 0}
                        onClick={() => checkoutHandler()}
                        >Checkout
                        </Button>
                    </ListGroup.Item>
                </Card>
            </Col>
            
        </Row>
        </>
    )
}


export default CartScreen