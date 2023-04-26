import React from 'react'
import './cartWidget.css'
import './button.css'

export const CartWidget = () => {
  return (
    <div className='btn btn-light bckg-color-primary'>
        <i class="bi bi-cart4"></i>
        <span class='badge badge-warning' id='lblCartCount'> 5 </span>
        
   </div>
  )
}
