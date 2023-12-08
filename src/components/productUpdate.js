import {  useState } from "react"
import { useLocation } from "react-router-dom";

import "./updateCard.css"


const ProductUpdate = ()=>{
    const location = useLocation()
    const {items} =  location.state


    const [title, setTitle] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState('');
    const [discount, setDiscount] = useState('');
    const [error, setError] = useState(null)
    
    const handleSubmit = async e =>{
        e.preventDefault()
        
        const product = {title, imgUrl , price, brand, discount}
    
        const response = await fetch(`http://localhost:4000/products/${items.id}`, 
        {
            method:"PATCH",
            body:JSON.stringify(product),
            headers:{
                "content-Type":"application/json",
            }
        }
        
        )
        const json = await response.json()
        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok){

            setError(null)
            console.log("product added", json)
            alert('product updated')
            //dispatch({type:"CREATE WORKOUT", payload: json})
        }

    }
    return(
        
        <form className="create"  onSubmit={handleSubmit}>
            <div className="card">
                <h3>EDIT PRODUCT</h3>
                <br/>
                <br/>
                <label>Title</label>
                <input type="text"
                onChange={e=>{setTitle(e.target.value )}}
                placeholder={items.title}
                value={title || items.title}/>
                <br/>
                    <label>Image Url:</label>
                <input type="text"
                onChange={e=>{setImgUrl(e.target.value )}}
                placeholder={items.thumbnail}
                value={imgUrl || items.thumbnail}/>
                    <br/>
                    <label>Price</label>
                <input type="number"
                onChange={e=>{setPrice(e.target.value )}}
                placeholder={items.price || items.price}
                value={price}/>
                <br/>
                <label>Brand</label>
                <input type="text"
                onChange={e=>{setBrand(e.target.value )}}
                placeholder={items.brand || items.brand}
                value={brand}/>
                <br/>
                <label>Discount Percentage</label>
                <input type="number"
                onChange={e=>{setDiscount(e.target.value  )}}
                placeholder={items.discountPercentage || items.discountPercentage}
                value={discount}/>
                <br/>
                <button className="btn btn-success"> Update product </button>
                {error && <div className="error">{error}</div>}
            </div>
        </form>
    )
    
}


export default ProductUpdate