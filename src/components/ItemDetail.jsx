import React from 'react'
import ItemCount from './ItemsCount'
import {Card} from "react-bootstrap";

const ItemDetail = ({detalle}) => {
  return (
    <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={detalle.img} />
    <Card.Body>
      <Card.Title>{detalle.name}</Card.Title>
      <Card.Text>Descripcíon: {detalle.descripcion}</Card.Text> 
      <Card.Text>Precio ${detalle.price}</Card.Text> 
      <Card.Text>Cantidad: {detalle.stock}</Card.Text>
        <ItemCount stock={detalle.stock}/>
    </Card.Body>
    
  </Card>

  )
}

export default ItemDetail
