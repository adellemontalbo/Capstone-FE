import React ,{ useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'


function HomeScreen() {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList

    // for (const product in products){
    // if (product.id === 3){
    //         product.image = 'https://images.pexels.com/photos/13119203/pexels-photo-13119203.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    //     }
    // }
    


    useEffect(()=>{
        dispatch(listProducts())

        },[])
 

    return (
        <div>
            <h1>Our Latest Treasures</h1>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                :
                <Row>
                {products.map(product =>(
                    <Col key ={product.id} sm ={12} md ={6} lg ={4} xl={3}>
                    <Product product ={product}/>
                    </Col>
                    ))}
            </Row>
            }
        </div>
    )
}

export default HomeScreen