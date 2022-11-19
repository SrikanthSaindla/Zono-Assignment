import React from 'react'

const Cart = (props) => {
    const{cart}=props
  return (
    <div>
        <h1>Cart</h1>
       {cart.map((each)=>(
        <div key={each.id}>
            <img src={each.icon} alt=""/>
            <h2>Qty:{each.default_unit_id}</h2>
        </div>
       ))}
    </div>
  )
}

export default Cart
