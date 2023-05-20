import React, { useEffect, useState,} from 'react'
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom'
import './itemListContainer.css'
import { doc, getDoc} from "firebase/firestore"
import { db } from '../services/db'


export const ItemDetailContainer = () => {
const [product, setProduct] = useState({})

const params = useParams()
const {productId} = params


useEffect(() => {
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
