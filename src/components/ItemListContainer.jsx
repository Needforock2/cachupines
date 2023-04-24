import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { ItemDetailContainer } from './ItemDetailContainer'
import { getProducts, productos } from '../async-mock'
import { Component } from 'react'

export const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  

useEffect(()=>{
 const promesa = getProducts()
        promesa.then((productos)=> setProducts(productos)
 ,(error)=>{
  console.log(error)
})
      
},[]) 

  return (    
    <div className='itemListContainer col-10 card'>
        <h2>  {greeting}</h2>
        <ItemList productos={products}/>
      
    </div>
  )
}
