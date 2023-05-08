import React from 'react'
import './Contador.css'

export const Contador = ({disminuyeContador, aumentaContador, contador}) => {
    return (        
        <div className='d-grid gap-2'>
               <div className='contenedor d-flex'>
                    <div className='btn contador-btn btn-outline-primary' onClick={disminuyeContador}>-</div>
                    <h4 className='ms-2 me-2'>{contador}</h4>
                    <div className='btn contador-btn btn-outline-primary' onClick={aumentaContador}>+</div>
                </div>
                
        </div> 
      )
    }

