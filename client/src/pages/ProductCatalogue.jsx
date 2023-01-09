import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Container,Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'
export const ProductCatalogue = () => {
    const [products, setProducts ] = useState([]);
    useEffect(()=>{
      //Axios is a promise-based HTTP library that allows developers to make requests to a third-party server or their own to fetch data
      //Axios provides several different ways of making requests such as GET, POST, PUT/PATCH and DELETE
      axios.get('/products').then(res =>{
            setProducts(res.data);
        });
    },[])
  return (
    <>
    <Container fluid="md">

    <div style={{padding: "30px 0 20px"}}><h3>Products Catalogue</h3></div>
    <hr></hr>
      <Row>
        {
                products.map(item => 
                    <Col md={3} key={item._id}> <ProductCard  product={item}/></Col>
                )
            }
      </Row>
    </Container>
   
    </>
    
  )
}