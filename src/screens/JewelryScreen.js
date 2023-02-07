import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Container, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import { listProductDetails } from '../actions/productActions'
// import axios from 'axios'



const JewelryScreen = () => {
    const [qty, setQty] = useState(1)

    const{ id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(id))
    },[dispatch, id])

    const addToCartHandler = () => {
        navigate(`/cart/${id}?qty=${qty}`)
}

    return (
        <div>
            <Link to='/' className='btn btn-link'>Go Back</Link>
            <Row>
                <Col>
                    <img height={500} width={500} src={product.image} alt= {product.image}/>
                </Col>
        
            
                <Col lg={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <strong>Price: </strong>${product.price}
                        </ListGroup.Item>
                       
                        <ListGroup.Item>
                        <strong>Description: </strong>{product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
        
                <Col lg={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                    {product.countInStock> 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col xs ='auto' className='my-1'>
                                        <Form.Control
                                            as ="select"
                                            value={qty}
                                            onChange={(e)=> setQty(e.target.value)}
                                        >
                                            {
                                                [...Array(product.countInStock).keys()].map((x)=>(
                                                    <option key={x+1} value={x+1}>
                                                        {x+1}
                                                    </option>
                                                ))
                                            }   
                                        </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                            <ListGroup.Item>
                                <Button 
                                    onClick={addToCartHandler} className='btn-block' 
                                    disabled={product.countInStock === 0} type='button'> Add To Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
        
        
  )
};

export default JewelryScreen