import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
        <h1>Agrega productos//Carrito Vacio</h1>
    <h2>Ofertas: </h2>
    <Link className='btn btn-primary'to='/'>Mas Productos</Link>
    </div>
  )
}

export default EmptyCart