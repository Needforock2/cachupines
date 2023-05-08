import React, { useState } from 'react'
import { CartContext } from './cartContext'


export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]) 
    console.log(cartList)  
    const addToCart = (item, qty) =>{
              
        setCartList(prev => [...prev, {...item, qty}])  
 }
    const removeList = ()=>{

    }
    const deleteItem = (id) =>{
      
      const updatedCart = cartList.filter(prod => prod.id != id) 
      
      setCartList(updatedCart)
      
    }
    const updateItemQty = (id, qty) =>{
     const listCopy = [...cartList] 
     const toUpdate = listCopy.find(item => item.id===id)
    toUpdate.qty=qty
     console.log(listCopy)
    setCartList(listCopy)
    }
    const countItems = () => {
        const suma = cartList.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.qty;
      }, 0);
      return suma
    }
  return (
    <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem, countItems, updateItemQty}}>
        {children}
    </CartContext.Provider>
  )
}
