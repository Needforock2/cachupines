import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { getProducts, productos } from '../async-mock'
import './itemListContainer.css'
import { useParams } from 'react-router-dom'



export const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])

  const {categoryId} = useParams()


useEffect(()=>{
  function allProducts() {
    const promesa = getProducts()
        promesa.then((productos)=> setProducts(productos)
      ,(error)=>{
        console.log(error)
      })
  }
  function categoryProducts(){
    const promesa = getProducts()
        promesa.then(productos=> setProducts(productos.filter(prods => prods.category == categoryId))
      ,(error)=>{
        console.log(error)
      })
  }
  
  categoryId ? categoryProducts() : allProducts ()
 
},[categoryId]) 

  return (    
    <div className='itemListContainer col-11 card'>
        <h2>  {greeting}</h2>
        <ItemList productos={products}/>
      
    </div>
  )
}
