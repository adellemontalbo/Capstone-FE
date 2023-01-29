import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import products from '../products'

// const Products = () =>{
//     return(
//         <section>
//             <h2>Products</h2>
//             <div>
//                 {products.map((product) => {
//                     return(
//                         <article key={product.id}>
//                         <h5>{product.name}</h5>
//                         <Link to={`/products/${product.id}`}>Info</Link>
//                         </article>
//                     )
//                 })}
//             </div>
//         </section>
//     )
// }
function Product({product}){
    return(
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product.id}`}>
            <Card.Img src={product.image} />
        </Link>

        <Card.Body>
        <Link to ={`/product/${product.id}`}>
            <Card.Title as= "div">
                <strong>{product.name}</strong>
            </Card.Title>
        </Link> 

        <Card.Text as='h3'>
            ${[product.price]}

        </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default Product