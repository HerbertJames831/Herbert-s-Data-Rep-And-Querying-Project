import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Table, Container, Button } from 'react-bootstrap';
import { DeleteButton } from '../components/DeleteButton';
import { Link } from 'react-router-dom';
const ProductManagement = () => {
    const [products, setProducts ] = useState([]);
    const removingDOM = (productId) => {
        setProducts(products.filter(product => product._id !== productId));
    }
    useEffect(()=>{
      //Axios is a promise-based HTTP library that allows developers to make requests to a third-party server or their own to fetch data
        //Axios provides several different ways of making requests such as GET, POST, PUT/PATCH and DELETE
        axios.get('/products').then(res =>{
            setProducts(res.data);
        },);
    },[products])


  
  return (
    <>
     <Container  >
        <br/>
     <Table striped >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Detail</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Best Seller</th>
          <th>Category</th>
          <th>Created At</th>
          {/* <th>Image</th> */}
          <th>Action</th>
        </tr>
        {
           //The Map Function splits the array of products into individual products
                products.map((item, i )=> 
                    <tr key={i}>
                         <td>{item._id}</td>
                        <td><Link to={"/products/"+item._id+"/edit"}>{item.name}</Link></td>
                        <td>{item.details}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.bestseller?"best seller":""}</td>
                        <td>{item.category}</td>
                        <td>{item.created_at}</td>
                        {/* <td>{item.image}</td> */}
                        <td>
                        <Link to={`/products/${item._id}/edit`} ><Button variant="primary" size="sm" active>Edit</Button></Link>{' '}
                        <DeleteButton productId={item._id} removingDOM={() => removingDOM(item._id)}/>
                        </td>
                    </tr>
                )
            }
          
      </thead>
      </Table>
     </Container>
    
    </>
  )
}

export default ProductManagement