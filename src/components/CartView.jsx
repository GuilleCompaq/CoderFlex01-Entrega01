import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'


const CartView = () => {
  const {cart, removeItem, clear, total}= useContext (CartContext)
  console.log (cart)
  return (
    <div>
      <h2>Tu carrito</h2>
      <div>
      { cart.map((compra)=>(
        <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}} >
          <img src={compra.img} style={{width:'10%'}}/>
          <span>Cantidad: {compra.quantity}</span>
          <span>Nombre: {compra.name}</span>
          <span>Total a Pagar:${compra.quantity * compra.price} </span>
          <button className='btn btn-danger'onClick={()=> removeItem (compra.id)}>Quitar</button>
            
          </div>
          
      ))
      }
      
      </div>
      <span>Total a pagar: ${total()}</span>
        <div className=''>
          <button className='btn btn-danger' onClick={clear}>Vaciar Carrito</button>
          <Link className='btn btn-success' to='/checkout'>Terminar Compra</Link>
        
        </div>

    </div>

  )
}

export default CartView