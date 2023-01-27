import React from 'react'
import { Link } from 'react-router-dom'
import { Row,Col,Image,ListGroup,Button,Card } from 'react-bootstrap'
import products from '../products'

// function ProductScreen() {
//     return (
//     <div>
//       Product
//     </div>
//     )
// }

// function ProductScreen({ match }) {
//     const product = products.find((p) => p.id === match.params.id)

function ProductScreen() {
    return (
        <div>
         <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            {/* <Row>
                <Col md={6}>
                 <Image src={product.image} alt={product.name} />
                </Col>
            </Row> */}
        </div>
    )
}




export default ProductScreen
