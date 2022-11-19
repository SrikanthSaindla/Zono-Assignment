import React from 'react'

const Cards = (props) => {
    const{each,AddToCart,IncreaseCart}=props
    const{icon,price,name}=each
  return (
    <div>
       <img src={icon} alt={name}/>
       <div>
        <h3>{name}</h3>
        <h4>{price}</h4>
        <button onClick={()=>IncreaseCart(each,-1)}>-</button>
        <button>{each.default_unit_id}</button>
        <button onClick={()=>IncreaseCart(each,1)}>+</button>
        <button onClick={()=>AddToCart(each)}>Add</button>
       </div>
    </div>
  )
}

export default Cards
