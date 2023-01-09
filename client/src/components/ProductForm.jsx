import React , {useState} from 'react'
import {  Form, Button, Card } from 'react-bootstrap'
export const ProductForm = (props) => {
    //Declaring and Initializing Variables
    const {nameIn, descriptionIn, quantityIn, priceIn, categoryIn, bestsellerIn, saveProduct} = props;
    const [name, setName] = useState(nameIn);
    const [description, setDescription] = useState(descriptionIn);
    const [quantity, setQuantity] = useState(quantityIn);
    const [price, setPrice] = useState(priceIn);
    const [category, setCategory] = useState(categoryIn);
    const [bestseller, setBestseller] = useState(bestsellerIn);
    // const [pricture, setPicture] = useState([]);

    // const onImageChange = e => setPicture({image: e.target.files[0]});
    //handleSubmit is responsible for retrieving the state's current value and adding it to the webhooks array 
    //The preventDefault() method helps to cancel the event if it is cancelable; this means the default action which belongs to the event will not happen
    const handleSubmit = (e)=>{
        e.preventDefault();
       
      const product = {name, description, price, quantity, bestseller, category}
      saveProduct(product);
    }
    
  return (
    <>
    <Card style={{padding:"30px"}}>
    <Form validated onSubmit={handleSubmit}>
   `    <Form.Group className="mb-3" controlId="form.name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter product name" value={name} required onChange={e => {setName(e.target.value);}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="form.detail">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" required placeholder="Enter product details" value={description} onChange={e => setDescription(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="form.detail">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" placeholder="Enter product quantity" value={quantity} onChange={e => setQuantity(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="form.price">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" required placeholder="Enter product price" value={price} onChange={e => setPrice(e.target.value)} />
        </Form.Group >
        <Form.Group className="mb-3" >
          <Form.Label htmlFor="category">Category</Form.Label>
          <Form.Select id="category" onChange={e => {setCategory(e.target.value)}} value={category} required>
            <option  >Select---</option>
            <option value="phone">Phones</option>
            <option value="furniture">Furniture</option>
            <option value="bags">Bags</option>
            <option value="clothes">Clothes</option>
          </Form.Select>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="form.bestseller">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Is Best Seller?"
            value={bestseller}
            onChange={e => setBestseller(!e.target.value)}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="form.image">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file"  onChange={onImageChange}/>
        </Form.Group> */}
      
      <Button  variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card>


    </>
  )
}
