import React,{useState,useEffect,useRef} from 'react'

const CheckOut = (props) => {
    const name=useRef()
    const email=useRef()
    const phone=useRef()
    const {cart}=props
     const[price,setPrice]=useState(0)
     const TotalPrice=()=>{
        let Amount=0;
        cart.map((each)=>(Amount+=each.price*each.default_unit_id))
        setPrice(Amount)
     }
     useEffect(()=>{
        TotalPrice()
     })
     const submitHandler=(e)=>{
        e.preventDefault()
        const name1=name.current.value
        const email1=email.current.value
        const phone1=phone.current.value
        var ptrn=/^[A-Za-z]+$/;
         
        /* Mandatory to fill*/
         if (name1===''|| email1===''||phone1==='') return alert("all details are required")
        /* Accept only digits*/
         if(!name1.match(ptrn)) return  alert('Only Alpha');
        /* Accept Maximum 50 Char.*/
        if(name1<=50) return alert("Less than 50 char")



        

         if(phone1.length !== 10) return alert("Only 10 numbers")

    console.log(cart)
     }
      
   if(!cart.length<=0){
  return (
    <div>
         <h1>Total.number of products:{cart.length}</h1>
         <h1>{price}</h1>
         <form onSubmit={submitHandler}>
            <input type="text" ref={name} placeholder='Enter name*'/><br/>
            <input type="email" ref={email} placeholder='Enter email*'/><br/>
            <input type="phone" ref={phone} placeholder='Enter Phone*'/><br/>
            <button type='submit'>CheckOut</button>
         </form>
    </div>
  )
   }
   else{
    return(
    <div>nothing</div>
    )
   }
}

export default CheckOut
