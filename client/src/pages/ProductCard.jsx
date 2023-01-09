import React from 'react'
import Card from 'react-bootstrap/Card';

const ProductCard = ({product}) => {
  const {name, description, price,quantity, bestseller, image } = product;
  return (<>
  <Card border="dark" style={{ width: '18rem' }}>
  <span style={{padding:"10px", color:"brown",fontSize:"16px", fontWeight:"900"}}>Qty: {quantity}</span>
        <Card.Img variant="top" style={{height: '12rem',width:'100%', display:'block', objectFit:'contain' }} src={`/product-images/31Hv6MsVLlL._AA210_.jpg`}/>
        <Card.Body>
          <Card.Title style={{textTransform:"capitalize"}}>{name}</Card.Title>
          <Card.Text>
            <small className="text-muted" style={{textTransform:"capitalize"}}>{description}</small>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <h3 className="text-muted">$.{price} {bestseller}</h3>
        </Card.Footer>
      </Card></>
  )
}

export default ProductCard