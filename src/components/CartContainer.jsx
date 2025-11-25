import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import EmptyCart from './EmptyCart'
import CartView from './CartView'

const CartContainer = () => {
    const {cart}=useContext (CartContext)
    console.log (cart)
  return (
    <>
    {! cart.length
    ? <EmptyCart/>
    : <CartView/>
    }
    </>
  )
}

export default CartContainer