import React from 'react'
const brand=[{
 name:"Samsung"
    },{
 
name:"Sony"
    }] 

const Brand = (props) => {
    
    const{setbrand,data}=props
     
         
     
  return (
    <div>
       {brand.map((each,i)=>(<div key={i}>
        <h1 onClick={()=>setbrand(each.name)}>{each.name}</h1>
         
       </div>))}
    </div>
  )
}

export default Brand
