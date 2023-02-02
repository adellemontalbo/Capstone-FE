import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Container, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import { listProductDetails } from '../actions/productActions'
// import axios from 'axios'



const ProductScreen = () => {
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
            <Link to='/' className='btn btn-dark my-3'>Go Back</Link>
            <Row>
                    <img height={500} width={500} src={product.image} alt= {product.image}/>
                    <img height={500} width={450} src={product.image} alt= {product.image}/>
                </Col>
        
            
                <Col lg={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                       
                        <ListGroup.Item>
                            Description: {product.description}
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

export default ProductScreen

//before Redux:
// const ProductScreen = () => {
//     const navigate = useNavigate();
//     const{id} = useParams();
//     const [product, setProduct] = useState({})
//     const [qty, setQty] = useState(1)

//     useEffect(() => {
//         axios.get(`/api/products/${id}`)
//         .then(response => {
//             // console.log('this is the response', response)
//             setProduct(response.data)
//             // setProduct(response.data.price)
//             // setProduct(response.data.description)
//         })
//         .catch(error=>console.log(error))
//     },[id])


// const addToCartHandler = () => {
//     console.log('Add to Cart:',id, qty )
//     navigate(`/cart/${id}?qty=${qty}`)
// }




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