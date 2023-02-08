import React ,{ useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'


function JewelryScreen() {
        const dispatch = useDispatch()
        const productList = useSelector(state => state.productList)
        const { error, loading, products } = productList
        const categoryproducts = products.filter(product => product.category === "Jewelry")
        console.log(categoryproducts)
            
        useEffect(()=>{
            dispatch(listProducts)
    
            },[])
    
    
        return (
            <div>
                <h1>Jewelry</h1>
                {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                :
                    <Row>
                    {categoryproducts.map(product =>(
                        <Col key ={product.id} sm ={12} md ={6} lg ={4} xl={3}>
                        <Product product ={product}/>
                        </Col>
                        ))}
                </Row>
}
            </div>
        )
    }
    

export default JewelryScreen