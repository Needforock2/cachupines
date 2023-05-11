import React, { useContext} from 'react'
import { CartContext } from '../context/cartContext'
import './CartView.css'
import { CartItem } from './CartItem'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'






export const CartView = () => {
  const {cartList, deleteItem, cartTotalPrice, removeList} = useContext(CartContext)  
  const eraseItem = (id)=>{
   deleteItem(id)    
  } 

  const precioTotal = cartTotalPrice(cartList)
  const envio = precioTotal*.05
  const bruto = precioTotal + envio
  
  return (
    <div className='d-flex flex-row  justify-content-evenly align-items-center'>
      <div className='cartContainer col-8 card'>
        {cartList.length >0 
          ?
          <>
            <div className='cart-header'>
                <h2 >Artículos en el carrito</h2>            
            </div>
            <div className='d-flex flex-row col-12'>
              <div className='col-12 items-list'>
                {cartList.map(articulo => (
                <CartItem key={articulo.id} product={articulo} eraseItem={()=>eraseItem(articulo.id)}/>
                //<li key={articulo.id}>{articulo.title} cantidad: {articulo.qty}</li>
                ))
                }
              </div>              
            </div>
            <div className='d-flex col-12 justify-content-evenly'>
            <Button className='btn btn-primary  col-3' onClick={removeList}>Vaciar Carrito</Button>
            <Link className='btn btn-primary  col-3 ' to='/' >Seguir comprando</Link>
            </div>
          </>
          :
          <>
            <div className='cart-header-no-border'>
                <img src={require('./../assets/icons/empty-cart.png')} alt='lskdf'/> 
                <h2 >No hay Artículos en el carrito</h2>
                <Link className='btn btn-outline-primary  col-6 mx-auto mt-4' to='/' >Volver a la tienda</Link>            
            </div>
          </>
        }
      </div>
      <div className='summaryContainer col-3 card'>
          <div className='cart-header'>
            <h2 >Resumen</h2>            
          </div>
          <div className='total-container d-flex justify-content-between'>
            <h3 className='col-6'>Productos:</h3> 
            <h3 className='col-6'>${precioTotal.toFixed(1)}</h3> 
          </div>
          <div className='total-container d-flex justify-content-between'>
            <h3 className='col-6'>Envio:</h3> 
            <h3 className='col-6'>${precioTotal.toFixed(1)*0.1}</h3> 
          </div>
          <div className='total-container strong d-flex justify-content-between'>
            <h3 className='col-6'>Total IVA incluido:</h3> 
            <h3 className='col-6'>${bruto.toFixed(1)}</h3> 
          </div>
          <Button className='col-12 mt-1' disabled={!precioTotal}>Realizar Compra</Button> 
      </div>      
    </div>
  )
}
