import React from 'react'
import "./index.css"

const Cards = (props) => {
    const{each,AddToCart,IncreaseCart}=props
    const{icon,price,name}=each
  return (
    <div className='card-list'>
       <img src={icon} alt={name} className='p-image'/>
       <div>
        <h3>{name}</h3>
        <h4>Price : {price}</h4>
        <button onClick={()=>IncreaseCart(each,-1)} className='commonBtn'>-</button>
        <button className='commonBtn' style={{borderBottom:"2px solid black"}}>{each.default_unit_id}</button>
        <button onClick={()=>IncreaseCart(each,1)} className='commonBtn'>+</button>
        <button onClick={()=>AddToCart(each)} className="btn1">Add</button>
         
       </div>
        
        
    </div>
  )
}

export default Cards
