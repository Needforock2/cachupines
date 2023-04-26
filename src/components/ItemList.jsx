import React from 'react'
import { Article } from './Article'


export const ItemList = ({productos}) => {   
  return (    
    <div className='d-flex flex-row flex-wrap justify-content-evenly col-12'>
        {productos.map(articulo => (
          <Article key={articulo.id} product={articulo}/>
          ))
          }
    </div>        
  )
}
