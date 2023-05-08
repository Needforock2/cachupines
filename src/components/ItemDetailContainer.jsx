import React, { useContext, useEffect, useState,} from 'react'
import { ItemDetail } from './ItemDetail'
import { getProductById } from '../async-mock'
import { useParams } from 'react-router-dom'
import './itemListContainer.css'
import { CartContext } from '../context/cartContext'




export const ItemDetailContainer = () => {
const [product, setProduct] = useState({})

const params = useParams()
const {productId} = params

useEffect(() => {    
    getProductById(productId)
    .then(productos => setProduct(productos.find(producto => producto.id===parseInt(productId))))
    .catch(error => console.error(error));
    
},[])

const context = useContext(CartContext)
  return (
    
      <div className='itemDetailContainer col-10 d-flex flex-column'>                   
        <ItemDetail {...product} />  
            
      </div>
      )  
  
}
