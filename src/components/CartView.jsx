import React, { useContext, useState } from 'react'
import { CartContext } from '../context/cartContext'
import { Article } from './Article'
import './CartView.css'
import { CartItem } from './CartItem'





export const CartView = () => {
  const {cartList, deleteItem} = useContext(CartContext)

  
  const eraseItem = (id)=>{
   deleteItem(id)    
  }
    
  
  return (
    <div className='itemListContainer col-11 card'>
        <div className='cart-header'>
            <h2 >Artículos en el carrito</h2>
            
        </div>
        <div className='d-flex flex-row col-12'>
          <div className='col-7'>
            {cartList.map(articulo => (
            <CartItem key={articulo.id} product={articulo} eraseItem={()=>eraseItem(articulo.id)}/>
            //<li key={articulo.id}>{articulo.title} cantidad: {articulo.qty}</li>
            ))
            }
          </div>
          <div className='col-5 mt-3'>
            <h2>Totalizador</h2>
          </div>
        </div>
       
    </div>
  )
}
