import React, {useEffect, useState} from 'react'
import { ProductForm } from '../components/ProductForm'
import { useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'
const UpdateProduct = (props) => {
    // The useParams hook is responsible for returning an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // useNavigate is benefical for returning a function that can be used to navigate
    const navigate = useNavigate();
    console.log("ID-->",id)
    const[ product, setProduct ] = useState({name:"", price:0.0, description:"", quantity:0,category:"",bestseller:false });

    useEffect(() => {
        //Axios is a promise-based HTTP library that allows developers to make requests to a third-party server or their own to fetch data
        //Axios provides several different ways of making requests such as GET, POST, PUT/PATCH and DELETE
        axios.get("/products/" + id)
            .then(res => {
                const data = {name:res.data.name,
                    price: res.data.price,
                    description: res.data.description,
                    quatity: res.data.quatity,
                category:res.data.category,
                bestseller: res.data.bestseller}
                setProduct({...data});

        })
            .catch(err => console.log(err));
    }, [id])

    const updating = (product) => {
        axios.put("/products/" + id, product)
            .then(res => {
                navigate("/products");
            });
    }
  return (
    <>
    
    <div>Edit Product Details</div>
    <ProductForm saveProduct={updating} 
    nameIn={product.name} descriptionIn={product.description} 
    quantityIn={product.quantity} priceIn={product.price} categoryIn={product.category} bestsellerIn={product.bestseller}/>
 
    </>
    )
}

export default UpdateProduct