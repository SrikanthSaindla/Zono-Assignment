import React from 'react'
import Cards from '../Cards'
import Cart from '../Cart'

import "./index.css"

const Products = (props) => {
    const{data,AddToCart,IncreaseCart,brand}=props
     

   if(Cart.length===0){
    return <h1>Loading....</h1>

  } 
  return (
    <div className='products-container'>
        <span>Products Of {brand}</span>
        <hr/>
        {data.filter((each)=>each.brand===brand).map((each)=>(
            <Cards key={each.id} each={each} AddToCart={AddToCart} IncreaseCart={IncreaseCart}/>
        ))}
         
    </div>
  ) 
  
}

export default Products
