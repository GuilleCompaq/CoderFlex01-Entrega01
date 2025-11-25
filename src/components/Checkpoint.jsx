
import { useContext, useState } from 'react'
import { CartContext } from '../context/cartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../Service/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'

const Checkout = () => {
    const[buyer, setBuyer] = useState({})
    const[secondMail, setSecondMail] = useState ('')
    const [errorform, setErrorForm] = useState (null)
    const {cart, total, clear}=useContext (CartContext)
    const[orderId, setOrderId] = useState (null)

    const buyerData =(e)=>{
        setBuyer(
            {
                ...buyer,
                [e.target.name] : e.target.value
                
            }
        )
    }
    console.log (buyer)
    const finalizarCompra =(e)=>{
        e.preventDefault ()
        if(!buyer.name || !buyer.lastname || !buyer.address || !buyer.mail){
            setErrorForm('Error en el Formulario')
            console.log ('Error en el Formulario')
        }else if (buyer.mail !== secondMail){
            setErrorForm ('No coincide el correo')
            console.log ('Error correo')
            

        }else{
            setErrorForm (null)
            
            let order ={
            comprador: buyer,
            compras: cart,
            total: total(),
            fecha: serverTimestamp(),
        
        }
        const ventas = collection(db, 'orders')
        //agregar doc a firebase
        console.log (db, 'enviar a firebase')
        addDoc(ventas, order)
        .then ((res)=>{
            setOrderId(res.id)
            clear ()
            

        })
        
        .catch((error)=> console.log(error))
        }
    }
    if(!cart.length && !orderId){
        return <EmptyCart/>
    }

  return (
    <>
    {
    orderId
    ?   <div> <h2>Gracias por su Compra!!!</h2>
        <h4>Orden numero: {orderId}</h4>
        <Link className='btn btn-primary' to='/'> Volver a Inicio</Link>
        </div>

    :   
    <div>
        <h2>Complete sus datos: </h2>
        {errorform && <span className='btn btn-danger'>Error en el formulario</span>}
            <form className='p-4 border rounded shadow-sm bg-light' onSubmit={finalizarCompra}>
            <input className='form-control' name='name' type='text' placeholder='Ingrese nombre' onChange={buyerData}/>        
            <input className='form-control' name='lastname' type='text' placeholder='Ingrese apellido' onChange={buyerData}/>
            <input className='form-control' name='address' type='text' placeholder='Ingrese direccion' onChange={buyerData}/>
            <input className='form-control' name='mail' type='email' placeholder='Ingrese tú correo' onChange={buyerData}/>
            <input className='form-control' name='mailsecond' type='email' placeholder='Repeti tú correo' onChange={(e)=>setSecondMail(e.target.value)}/>
            <button type='submit' className='btn btn-success'> Confirmar Compra</button>
            </form>
    
        </div>
    }
    </>


    
  )
}

export default Checkout