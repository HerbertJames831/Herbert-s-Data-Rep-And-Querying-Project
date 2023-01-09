import React from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
export const DeleteButton = ({productId, removingDOM}) => {
    const deleting= (e)=>{
      //Axios is a promise-based HTTP library that allows developers to make requests to a third-party server or their own to fetch data
        //Axios provides several different ways of making requests such as GET, POST, PUT/PATCH and DELETE
        //The axios.delete() function makes it straightforward to send an HTTP DELETE request to the URL
        axios.delete(`/products/${productId}`).then((res)=>{
          removingDOM();
        })
    }
  return (
    //Delete Button
    <Button  variant="danger" size="sm" onClick={(e)=>{deleting(e)}} active>Delete</Button>
  )
}
