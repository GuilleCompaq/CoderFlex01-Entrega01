
import {Badge} from 'react-bootstrap'
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CartWidget = ()=>{
    const {cartQuantity, cart}= useContext(CartContext)
        console.log(cart)
    return(
        <>
        <div>
        <span>🛒</span>
       {cart.length > 0 && <Badge pill bg="danger">{cartQuantity()}</Badge>}
       </div>
       </>
    )
}

export default CartWidget