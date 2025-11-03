import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncService";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [data, setData]=useState ([])

  //categoria
const {type}= useParams()
console.log (type)


  useEffect(() => {
    console.log (getProducts())
    getProducts()
      .then((res) =>{
        //filtrado de categoria
        if (type){
          setData (res.filter((prod)=> prod.category === type))
        }else{
          setData (res)
        }
        })
      .catch((error) => console.log(error));
  }, [type]);
  
  console.log (data, 'estado')

  return (
    <div>
      <h1 className="text-succes">{props.Saludo}</h1>
      {/*data.map((prod)=><p key={prod.id}>{prod.name}</p>)*/}
      <ItemList data={data}/>
    </div>
  );
};
export default ItemListContainer;
