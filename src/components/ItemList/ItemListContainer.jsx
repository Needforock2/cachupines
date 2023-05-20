import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import './itemListContainer.css'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from '@firebase/firestore'
import { Spinner } from 'react-bootstrap'
import { db } from '../../services/db'




export const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const {categoryId} = useParams()



useEffect(()=>{
  function allProducts() {
      const productsDB = collection(db, 'Items')  
      getDocs(productsDB)
      .then( products => {
        setProducts(products.docs.map( doc => ({id: doc.id ,...doc.data()} ) ))
      } )

  }
  function categoryProducts(){
      const q = query(collection(db, 'Items'), where("category", "==", categoryId))
      getDocs(q)
      .then( products => {
        setProducts(products.docs.map( doc => ({id: doc.id ,...doc.data()} ) ))
      } )
  }

  categoryId ? categoryProducts() : allProducts ()
 
},[categoryId]) 

  return (    
    <div className='itemListContainer col-11 card'>
        <h2 className='mb-4'> { greeting
                ?
                greeting
                :
                categoryId.toUpperCase()
            }</h2>
            <>
            {
              products.length > 0 
              ?
              <ItemList productos={products}/> 
              :
              <Spinner animation="grow" />
            }
          </>         
    </div>    
  )
}