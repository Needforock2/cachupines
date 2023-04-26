import React from 'react'
import './article.css'
import { Link } from 'react-router-dom'

  export const Article = ({product: {id, title, pictureUrl, price, stock}}) => { 

  return (
  <div className='card p-4 col-12 col-md-5 m-3'>
      <h3> {title}</h3>
      <img className='imgArticulo' src={pictureUrl} alt="articulo" ></img>      
      <h4>Precio ${price}</h4> 
      <h4>Cantidad en Stock: {stock}</h4> 
      <Link className='btn btn-outline-primary' to={`/products/${id}`}>Ver Detalle</Link>
       
  </div>
  )
}
