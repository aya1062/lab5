import React from 'react'
import { useSelector } from 'react-redux'


function Detbook() {
     const wishlist=useSelector(state=>state.Detbookreducer.cart)
  return (
     <div style={{fontSize:"50px"}}>{wishlist.length}</div>
  )
}

export default Detbook