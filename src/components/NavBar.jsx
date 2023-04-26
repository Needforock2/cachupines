import React from 'react'
import { CartWidget } from './CartWidget'
import { Button } from './Button'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export const NavBar = () => {
  return (
    <header className="App-header col-12 justify-content-start">
        <div className='col-6 text-start'>
          <NavLink className={'brand'} to={`/`}>Cachupines.cl</NavLink>
        </div>
        <div className='col-6 d-flex flex-row justify-content-end align-items-center'> 
            <Button text='Ropa' />
            <Button text='Accesorios' />
            <Button text='Menaje' />      
            <CartWidget />
        </div>          
    </header>
  )
}
