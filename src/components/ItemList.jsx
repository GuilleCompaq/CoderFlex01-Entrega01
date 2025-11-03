import React from 'react'
import Item from './Item'



const ItemList = ({data}) => {
  return (
    <div className='d-flex justify-content-around flex-wrap'>
        {data.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList