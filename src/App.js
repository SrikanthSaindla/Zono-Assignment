 
import React,{useEffect,useState} from 'react'
import Products from './Components/Products'
import axios from "axios"
import "./index.css"
import Cart from './Components/Cart'

import "./App.css"
 
import Brand from './Components/Brand'

 

const App = () => {
  const[data,setData]=useState([])
   
  const [cart,setCart]=useState([])
  const[brand,setbrand]=useState("Samsung")
   
   
  useEffect(()=>{
    axios.get("https://gist.githubusercontent.com/sandeepdillerao/edb372a95d6cf1a2a49b79577d023281/raw/75bf5e59e47748fad0d01ca63c81dd3791c2615c/product.json").then(
      res=>setData(res.data)
    )
       
  },[])
  
 
  const AddToCart=(item)=>{
    if(cart.indexOf(item)!==-1) return;
 setCart([...cart,item])
  
  }
  
  const IncreaseCart=(each,amount)=>{
     
      const res=data.filter(item=> item.id===each.id)
       
     res[0].default_unit_id+=amount
     

   if(res[0].default_unit_id===0)  res[0].default_unit_id=1;
   setCart([...cart])
  }
  return (
    <div className='App'>
      <Brand setbrand={setbrand} data={data}/>
       <Products data={data} AddToCart={AddToCart} IncreaseCart={IncreaseCart} brand={brand}/>
       <Cart cart={cart} setCart={setCart}  />
        
    </div>
  )
}

export default App
