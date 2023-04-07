import React from 'react'

export const ItemListContainer = ({greeting}) => {
  return (
    <div className='itemListContainer col-6 card btn'>
        <h2>Aqui debería ir el texto del prop greeting:  {greeting}</h2>
    </div>
  )
}
