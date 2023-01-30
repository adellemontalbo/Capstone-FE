import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Container, Image,ListGroup,Button,Card, ListGroupItem } from 'react-bootstrap'
import products from '../products'
import axios from 'axios'

const ProductScreen=() => {
    const params = useParams();
    const {id} = params;
    const product =products.find((product) => product.id === id);

    const{image,name,price,description} = product
// function ProductScreen({match}) {
//     console.log(match)
//     const [product, setProduct] = useState([])
    
//     useEffect(()=>{
//         async function fetchProducts(){
//             const {data}= await axios.get(`/api/products/${match.params.id}`)
//             setProduct(data)
//         }
//         fetchProducts()

    // },[])

    return (

        <div>
            
            <Link to='/' className='btn btn-dark my-3'>Go Back</Link>
                <Row>
                    <Col md={8}>
                        <img src={image} alt= {name} fluid/>
                    </Col>
        
            
            <Col md={2}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3> {name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ${price}
                    </ListGroup.Item>
                </ListGroup>
                <ListGroupItem>
                Description: {description}
                </ListGroupItem>
            </Col>
        
            <Col md={2}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <Row>
                                <Col>price:</Col>
                                <Col>
                                    <strong>${price}</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                    {product.countInStock> 0 ? 'In Stock' : 'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className='btn-block' disabled={product.countInStock=== 0} type='button'> Add to Cart</Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
            </Row>
            </div>
        
    )
}




export default ProductScreen