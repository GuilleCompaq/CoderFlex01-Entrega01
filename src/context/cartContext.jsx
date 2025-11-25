//logica de carrito de compras
import { createContext, useEffect, useState } from "react";
//contexto y proveedor en 1 solo linea de javascrip (almacena los datos de componentes)
export const CartContext = createContext ()


//ls1
const carritoLs = JSON.parse(localStorage.getItem('carrito')) || []


//Agrupa los componentes que precisan compartir datos
export const CartProvider = ({children})=>{
    const [cart, setCart] = useState(carritoLs)
//ls2
useEffect(()=>{
    localStorage.setItem('carrito', JSON.stringify(cart))
}, [cart])


//Todas las funciones del carrito Aqui----------------------------------------------------

//Agregar item al carrito
const addItem = (item, qty) =>{
    if(isInCart(item.id)){

        setCart(
            cart.map((prod)=> {
            if(prod.id === item.id){
                //actualizar
                return {...prod, quantity: prod.quantity + qty}
            }else{
                
                return prod
            }
        })
        )
    }else{
        //no existe en el carrito, lo agrego
        setCart([...cart, {...item, quantity:qty}])
    }
    // console.log({...item, quantity:qty})

}

//elimine un item del carrito

const removeItem = (id) => {
    setCart(cart.filter((prod)=> prod.id !== id))
}

//borre todo el carrito
const clear = () => {
    setCart([])
}

//devuelva un bool si ese item existe o no en el carrito

const isInCart = (id)=>{
    return cart.some((prod)=> prod.id === id)
}
//total precio
const total = ()=> {
    return cart.reduce ((acc, prod)=> (acc += prod.quantity * prod.price),0)
}



// total articulos
const cartQuantity= ()=> {
    return cart.reduce ((acc, prod)=> acc += prod.quantity,0)
        
}

return(
    <CartContext.Provider value={{cart, addItem, removeItem, clear, total, cartQuantity}}>
        {children}
    </CartContext.Provider>
)
}