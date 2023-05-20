import React, { useState } from 'react'
import './itemCount.css'

export function ItemCount ({stock, initial, onAdd, width}) {
const[contador, setContador]=useState(initial)


const aumentaContador = ()=>{
    if(contador < stock){
        setContador(contador +1)
     } 
    }  
const disminuyeContador = ()=>{
    if(contador > 1){
        setContador(contador -1)
    }   
}
return (
    
    <div className='mt-4 d-flex flex-column gap-2 align-items-center'>
        
           <div className='contenedor d-flex  col-md-12 col-lg-8'>
                <div className='btn count-btn btn-outline-primary' onClick={disminuyeContador}>-</div>
                <h4>{contador}</h4>
                <div className='btn count-btn btn-outline-primary' onClick={aumentaContador}>+</div>
            </div>
            <button className='btn btn-outline-primary col-md-12 col-lg-8'  onClick={()=>onAdd(contador)} disabled={!stock}>Agregar al carrito</button>
        
    </div> 
  )
}

