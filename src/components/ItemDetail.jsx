import React, { useState } from 'react'
import ItemCount from './ItemsCount'
import {Button, Card} from "react-bootstrap";
import { useContext } from 'react';//hook uso de contexto
import { CartContext } from '../context/cartContext';//contexto que voy a utilizar
import { Link } from 'react-router-dom';


const ItemDetail = ({detalle}) => {

    const {cart, addItem } = useContext(CartContext)
    const [purchase, setPurchase] = useState (false)
    
    //Sumas al carrito
    const onAdd =(cantidad)=> {

    console.log `Sumaste ${cantidad} al carrito`
    setPurchase (true)
    addItem (detalle, cantidad)
} 

  return (
    <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={detalle.img} />
    <Card.Body>
      <Card.Title>{detalle.name}</Card.Title>
      <Card.Text>Descripcíon: {detalle.descripcion}</Card.Text> 
      <Card.Text>Precio ${detalle.price}</Card.Text> 
      <Card.Text>Cantidad: {detalle.stock}</Card.Text>
        {purchase ? <Link className='btn btn-success' to='/cart'>Terminar Compra</Link> : <ItemCount stock={detalle.stock} onAdd={onAdd}/>}
    </Card.Body>
    
  </Card>

  )
}

export default ItemDetail
