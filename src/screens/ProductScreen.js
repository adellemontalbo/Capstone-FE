import React from 'react'
import { Link,useParams } from 'react-router-dom'
import { Row,Col,Image,ListGroup,Button,Card } from 'react-bootstrap'
import products from '../products'


function ProductScreen({match}) {
    const product = products.find((p) => p.id == match.params.id)
    return (
    <div>
        <Link to= '/' className='btn btn-light my-3'> Go Back </Link>
    </div>
    )
}

export default ProductScreen
