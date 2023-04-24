import React, { useEffect, useState } from 'react'
import { ItemCount } from './ItemCount'
import './article.css'
import { Button } from './Button'


  export const Article = ({product: {title, pictureUrl, price, stock}}) => { 
  return (
  <div className='card p-4 col-5 m-3'>
      <h3> {title}</h3>
      <img className='imgArticulo' src={pictureUrl} alt="articulo" ></img>      
      <h4>Precio ${price}</h4> 
      <h4>Cantidad en Stock: {stock}</h4> 
      <button className='btn btn-outline-primary'>Ver detalle</button>
      
  </div>
  )
}
