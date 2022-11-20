import React from 'react'
import "./index.css"
import CheckOut from '../CheckOut'

const Cart = (props) => {
    const{cart,setCart}=props
const RemoveItem=(id)=>{
    const final=cart.filter((item)=>item.id!==id)
    setCart(final)
    
}

    if(cart.length===0){
      return  (
  <div className="cart-empty-view-container">
     
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
      className="cart-empty-image"
      alt="cart empty"
    />
    <h1 className="cart-empty-heading">Your Cart Is Empty</h1>

     
      
     
  </div>
)

 
    }
  return (
    <div className='cart-list'>
        <span className='cart-head'>Cart</span>
         
       {cart.map((each)=>(
        <div key={each.id} className="cart-items">
            <img src={each.icon} alt={each.name} className="cart-img"  />
            <div className='cart-details'>
              
            <span>{each.name}</span>
            <div>
            <span>Qty : {each.default_unit_id}</span>
             
            
            <button className='remove-btn'
            onClick={()=>RemoveItem(each.id)}>Remove</button>
             </div>
             <span>Total : {(each.default_unit_id)*each.price} </span>
            </div>
             
        </div>
       ))}
        <CheckOut cart={cart}/>
    </div>
  )
}

export default Cart
