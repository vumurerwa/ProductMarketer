import React from "react";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";


const AddProduct = ({ onAdd}) => {
    const [product, setProduct] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!product) {
            alert('Please add a product')
            return
        }
        onAdd({ product, title, price})

        setProduct('')
        setTitle('')
        setPrice('')
    }
    return (
        <Container style={{ backgroundColor: 'gray', width: '30%', height: '100vh'}}>
        <form style={{ marginTop: '8rem', position: 'absolute', width: '40%', }} className='add-form' onSubmit=
        {onSubmit}>
            <div style={{ fontSize: '30px',marginLeft: '4rem'}}><b>Add a Product</b></div>
           <div style={{ padding: '1rem'}}>
              <label><b>Product: </b></label> 
              <input type='text' placeholder='Add Product'
              value={product} onChange={(e) =>
              setProduct(e.target.value)}/>   
           </div>
           <div style={{ padding: '1rem'}}>
              <label><b>Title: </b></label> 
              <input style={{ marginLeft: '1.5rem'}} type='text' placeholder='Add title'
               value={title} onChange={(e) =>
                setTitle(e.target.value)}/>   
           </div>
           <div style={{ padding: '1rem'}}>
              <label ><b>Price: </b></label> 
              <input style={{ marginLeft: '1.2rem'}} type='text' placeholder='Add Price'
               value={price} onChange={(e) =>
                setPrice(e.target.value)}/>   
           </div>
           <Button style={{ marginLeft: '6rem'}} onClick={()=>onAdd()} >Add Product</Button>
        </form>
        </Container>
    )
}

export default AddProduct