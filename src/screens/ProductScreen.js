import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Container, Image,ListGroup,Button,Card, ListGroupItem } from 'react-bootstrap'
import products from '../products'
import axios from 'axios'

// import React from 'react'

const ProductScreen = () => {
    const{id} = useParams();
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        axios.get(`/api/products/${id}`)
        .then(response => {
            console.log('this is the response', response)
            setProduct(response.data)
            // setProduct(response.data.price)
            // setProduct(response.data.description)
        })
        .catch(error=>console.log(error))
    },)
  
    return (
        <div>
            
            <Link to='/' className='btn btn-dark my-3'>Go Back</Link>
                <Row>
                    <Col md={8}>
                        <img height={500} width={500} src={product.image} alt= {product.image}/>
                    </Col>
        
            
            <Col md={2}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3> {product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ${product.price}
                    </ListGroup.Item>
                </ListGroup>
                <ListGroupItem>
                Description: {product.description}
                </ListGroupItem>
            </Col>
        
            <Col md={2}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <Row>
                                <Col>price:</Col>
                                <Col>
                                    <strong>${product.price}</strong>
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
};

export default ProductScreen

// const ProductScreen=() => {
//     const params = useParams();
//     const {id} = params;
//     const product =products.find((product) => product.id === id);

//     const{image,name,price,description} = product
// function ProductScreen({id}) {
//     const [product, setProduct] = useState([])
    
//     useEffect(()=>{
//         async function fetchProducts(){
//             const {data}= await axios.get(`/api/products/${id}`)
//             setProduct(data)
//         }
//         fetchProducts()

//     },[])

//     return (

        // <div>
            
        //     <Link to='/' className='btn btn-dark my-3'>Go Back</Link>
        //         <Row>
        //             <Col md={8}>
        //                 <img src={image} alt= {name} fluid/>
        //             </Col>
        
            
        //     <Col md={2}>
        //         <ListGroup variant='flush'>
        //             <ListGroup.Item>
        //                 <h3> {name}</h3>
        //             </ListGroup.Item>
        //             <ListGroup.Item>
        //                 Price: ${price}
        //             </ListGroup.Item>
        //         </ListGroup>
        //         <ListGroupItem>
        //         Description: {description}
        //         </ListGroupItem>
        //     </Col>
        
        //     <Col md={2}>
        //         <Card>
        //             <ListGroup variant='flush'>
        //                 <ListGroupItem>
        //                     <Row>
        //                         <Col>price:</Col>
        //                         <Col>
        //                             <strong>${price}</strong>
        //                         </Col>
        //                     </Row>
        //                 </ListGroupItem>
        //                 <ListGroupItem>
        //                     <Row>
        //                         <Col>Status:</Col>
        //                         <Col>
        //                             {product.countInStock> 0 ? 'In Stock' : 'Out of Stock'}
        //                         </Col>
        //                     </Row>
        //                 </ListGroupItem>
        //                 <ListGroupItem>
        //                     <Button className='btn-block' disabled={product.countInStock=== 0} type='button'> Add to Cart</Button>
        //                 </ListGroupItem>
        //             </ListGroup>
        //         </Card>
        //     </Col>
        //     </Row>
        //     </div>
        
//     )
// }




// export default ProductScreen