import React from 'react'
import { Article } from './Article'


export const ItemList = ({productos}) => {   
  return (    
    <div className='d-flex flex-row flex-wrap justify-content-between'>
        {productos.map(articulo => <Article key={articulo.id} product={articulo}/>)}
    </div>        
  )
}
