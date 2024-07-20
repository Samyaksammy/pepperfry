import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({id,img,title,des,price}) => {
  
  
  return (
    <div>
        <img src={img} alt={title}/>
        <h1>{title}</h1>
        <p>{des}</p>
        <h3>{price}</h3>
        
        
    </div>
  )
}

export default Card