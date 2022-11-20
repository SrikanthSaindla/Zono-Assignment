import React   from 'react'
import "./index.css"
const brand=[{
 name:"Samsung",
 no:0,
 img:"https://res.cloudinary.com/srikanth143/image/upload/v1668912583/th_wt8klf.jpg"
    },{
 
name:"Sony",
no:0,
 
 img:"https://res.cloudinary.com/srikanth143/image/upload/v1668912583/th_1_zk648s.jpg"
    }] 

const Brand = (props) => {
  const{data,setbrand}=props
    
     
      
     
      const countProducts=()=>{
        const res=data.filter((each)=>each.brand===brand[0].name)
          
         brand[0].no=res.length
         brand[1].no=data.length-res.length
      }
    
      
      countProducts()
    
  return (
    <div className='brand'>
      <span className='brand-head'>Brands</span>
       <div className='brand-container' > 
       {brand.map((each,i)=>(<div key={i} onClick={()=>setbrand(each.name)}  className='brand-list'>
        <img src={each.img} alt="" className='logoimg'/>
        <div  >
        <span className='b-name' >{each.name}</span>
        <p>Product Count : {each.no}</p>
         </div>
       </div>))}
       </div>
    </div>
  )
}

export default Brand
