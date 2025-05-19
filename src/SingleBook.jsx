import React from 'react'
import { useDispatch } from 'react-redux'
import { addtoshowlist } from './redux/slices/DetbookSlice'

function SingleBook(props) {
     const dispatch=   useDispatch()
    function save()
    {
        dispatch(addtoshowlist(props))
    }
   
  return (
    <div className="card" style={{width:"15rem"}}>
        <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                    {props.descrption}
               
                </p>
                <button onClick={save}>
                    show details
                </button>
                {/* <button onClick={remove}>
                    show details
                </button> */}
            </div>
    </div>
                
  )
}

export default SingleBook