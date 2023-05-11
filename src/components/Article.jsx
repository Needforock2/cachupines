import React from 'react'
import './article.css'
import { Link } from 'react-router-dom'
import { Card, ListGroup} from 'react-bootstrap'

  export const Article = ({product: {id, title, pictureUrl, price, stock}}) => { 

  return (   
      <Card style={{ width: '18rem' }}>
        <Card.Img className='imgArticulo' variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <ListGroup variant="flush">
              <ListGroup.Item>Precio ${price}</ListGroup.Item>
              <ListGroup.Item>Cantidad en Stock: {stock}</ListGroup.Item>
            </ListGroup>
          <Link className='btn btn-outline-primary' to={`/products/${id}`}>Ver Detalle</Link>
        </Card.Body>
      </Card>   
  
  )
}
