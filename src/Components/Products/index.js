import React from 'react'
import Cards from '../Cards'

const Products = (props) => {
    const{data,AddToCart,IncreaseCart,brand}=props
  return (
    <div>
        <h1>Products :{brand}</h1>
        {data.filter((each)=>each.brand===brand).map((each)=>(
            <Cards key={each.id} each={each} AddToCart={AddToCart} IncreaseCart={IncreaseCart}/>
        ))}
    </div>
  )
}

export default Products
