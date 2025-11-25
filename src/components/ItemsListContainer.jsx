import { useEffect, useState } from "react";
//import { getProducts } from "../mock/AsyncService";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../Service/firebase";

const ItemListContainer = (props) => {
  const [data, setData]=useState ([])
  const [Loader, setLoader]= useState (false)//uso de spinner
  const {type}= useParams() //categorias 
//conectar firebase
useEffect (()=>{
  setLoader(true)
  //1-conectar con nuestra collecion
  //2-parametros db y nombre de la colleccion
const productsCollection = type 
   ? query (collection(db, 'products'), where ('category', '==', type))
   : collection(db, 'products')
  //pedir documentos es un metodo y se llama con ()
  getDocs(productsCollection)
  .then((res)=>{
    console.log (res.docs,'sinFiltro')
    const list =res.docs.map((doc)=>{
      return {
        id:doc.id,
        ...doc.data()
        
      }
    })
    
    setData(list)
    console.log (list)
  })
  .catch((error)=> console.log (error))
  .finally(()=> setLoader(false))
},[type])

//  useEffect(() => {
//    setLoader (true)
//   console.log (getProducts())
//   getProducts()
//     .then((res) =>{
//       //filtrado de categoria
//       if (type){
//          setData (res.filter((prod)=> prod.category === type))
//        }else{
//          setData (res)
//       }
//      })
//     .catch((error) => console.log(error))
//     .finally (() => setLoader (false))
// },[type])
  
//  console.log (data, 'estado')

  return (
    <>
    <button></button>
    {Loader
    ? <LoaderComponent/>
    : <div>
        <h1 className="text-succes">{props.Saludo}</h1>
        {/*data.map((prod)=><p key={prod.id}>{prod.name}</p>)*/}
        <ItemList data={data}/>
      </div>

    }
    </>

  );
};

export default ItemListContainer;
