import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { getProductById } from '../async-mock'


export const ItemDetailContainer = () => {

const [product, setProduct] = useState({})


useEffect(() => {    
    getProductById(4)
    .then(productos => setProduct(productos.find(producto => producto.id===4)))
    .catch(error => console.error(error));
    
},[])

  return (
    <div className='itemListContainer col-10 d-flex flex-column'>
        <h2>Este es el detalle del articulo</h2>        
        <ItemDetail {...product} />
    </div>
    
  )
}
