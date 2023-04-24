import React, { useState } from 'react'
import './itemCount.css'

export function ItemCount ({stock, initial, onAdd}) {
const[contador, setContador]=useState(initial)

const aumentaContador = ()=>{
    if(contador < stock){
        setContador(contador +1)
     }   
const disminuyeContador = ()=>{
    if(contador > 1){
        setContador(contador -1)
    }   
}
return (
    <div className='d-grid gap-2'>
           <div className='contenedor d-flex'>
                <div className='btn count-btn btn-outline-primary' onClick={disminuyeContador}>-</div>
                <h4>{contador}</h4>
                <div className='btn count-btn btn-outline-primary' onClick={aumentaContador}>+</div>
            </div>
            <button className='btn btn-outline-primary'  onClick={()=>onAdd(contador)} disabled={!stock}>Agregar al carrito</button>
    </div> 
  )
}
