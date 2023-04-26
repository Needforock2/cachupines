import React from 'react'
import { ItemCount } from './ItemCount'
import './itemListContainer.css'



export const ItemDetail = ({title, pictureUrl, price, description, stock}) => {
  return (
    <div className=' card p-4 col-12 col-md-8 m-3 item-detail'> 
        <div className='detail-header'>
          <img className='imgArticulo' src={pictureUrl} alt="articulo" ></img> 
          <div className='d-flex flex-column justify-content-evenly'>
            <h3> {title}</h3> 
            <h4>{description}</h4>
          </div>
        </div>
       
        <h4>Precio ${price}</h4> 
        <h4>Unidades Disponibles: {stock}</h4>  
        <ItemCount stock={stock} initial={1} onAdd={(n) => console.log("agregando al carro", n)} />       
    </div>
  )
}
