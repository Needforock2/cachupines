import React from 'react'
import { ItemCount } from './ItemCount'


export const ItemDetail = ({id, title, pictureUrl, price, description, stock}) => {
   
  return (
    <div className=' card p-4 col-5 m-3'>        
        <h3> {title}</h3>
        <img className='imgArticulo' src={pictureUrl} alt="articulo" ></img>      
        <h4>Precio ${price}</h4> 
        <h4>{description}</h4>
        <h4>Unidades Disponibles: {stock}</h4>  
        <ItemCount stock={stock} initial={1} onAdd={(n) => console.log("agregando al carro", n)} />       
    </div>
  )
}
