import React from "react";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  console.log ('item', prod.id)
  
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>Descripcíon: {prod.descripcion}</Card.Text>
        <Card.Text>Precio: ${prod.price}</Card.Text>
        
         
        <Link variant="primary" to={`/item/${prod.id}`}>Ver detalles</Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
