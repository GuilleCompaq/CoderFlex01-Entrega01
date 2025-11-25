import React, { useEffect, useState } from 'react'
//import { getOneProduct } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../Service/firebase'
import { Link } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [detalle, setDetalle]= useState ({})
    const [loading, setLoading]= useState (false)
    const {id}=useParams()
    const [invalid, setInvalid]= useState (null)
 
// firebase
useEffect (()=> {
  setLoading (true)
  const docRef = doc(db, 'products', id)
  getDoc(docRef)

  .then((res)=>{
    if(res.data()){
      setDetalle({id:res.id, ...res.data()})
      
    }else{
      setInvalid(true)
    }
    console.log(res,'ItemListContainer')

  })
  .catch((error)=> console.log(error))
  .finally(()=>setLoading(false))
  
},[id])
    
//    useEffect(()=>{
//    setLoading (true)
//    getOneProduct(id)
//    .then ((res)=>setDetalle(res))
//    .catch ((error)=>console.log (error))
//    .finally(()=> setLoading (false))
//  },[id])
if(invalid){
  return <><div>
     <h1>No existe el Producto</h1>
     <Link className= 'btn btn-primary' to='/'> Volver Inicio </Link>
  </div>
  </>
}    
return (
    <>
      {loading ? <LoaderComponent/> :
      <ItemDetail detalle={detalle}/>
      }
    </>
  )
}

export default ItemDetailContainer