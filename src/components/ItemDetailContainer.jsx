import React, { useEffect, useState,} from 'react'
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom'
import './itemListContainer.css'
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { Spinner } from 'react-bootstrap'


export const ItemDetailContainer = () => {
const [product, setProduct] = useState({})

const params = useParams()
const {productId} = params
const db = getFirestore()

useEffect(() => {    
    /* getProductById(productId)
    .then(productos => setProduct(productos.find(producto => producto.id===parseInt(productId))))
    .catch(error => console.error(error)); */
    const itemDB = doc(db, 'Items', productId)
      getDoc(itemDB)
      .then( (product) => {
        if (product.exists()){
          setProduct({id: product.id ,...product.data()})
        }
      })
    
},[productId, db])

  return (
    
      <div className='itemDetailContainer col-10 d-flex flex-column'>                   
        
        <ItemDetail {...product} /> 
                
      </div>
      )  
  
}
