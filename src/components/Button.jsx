import React from 'react'
import './button.css'

export const Button = ({text}) => {
  return (
    <div className='btn btn-light bckg-color-primary'>{text}</div>
  )
}
