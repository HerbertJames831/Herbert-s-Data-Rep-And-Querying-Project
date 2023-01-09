import React, {useState} from 'react'
import axios from 'axios'
import { ProductForm } from '../components/ProductForm';
import AlertMessage from '../components/AlertMessage';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export const AddProduct = () => {
    let [message, setMessage] = useState("");
    // useNavigate is benefical for returning a function that can be used to navigate
    const navigate = useNavigate();
    const createProduct = (product)=>{
      //Axios is a promise-based HTTP library that allows developers to make requests to a third-party server or their own to fetch data
      //Axios provides several different ways of making requests such as GET, POST, PUT/PATCH and DELETE
      axios.post('/products', product, { headers: {
            'Content-type': 'application/json'
          }}).then(res=>{
            message= {type:"success",value: "Successfully added product"}
            setMessage(message)
            navigate('/products');
          }).catch((error)=>{
            message={type: "error",value:error.response.data.errors}
            setMessage(message)
          })
    }
    
  return (
    <>
    <Container>
        <div style={{padding:"30px 0 20px"}}>
            <h3>Add Product</h3>
        </div>
        
        <AlertMessage message={message.value} type={message.type}/>
        <ProductForm saveProduct={createProduct} 
        nameIn="" descriptionIn="" quantityIn={1} priceIn={0.0} categoryIn="" bestsellerIn={false}/>
    </Container>
    </>
  )
}
