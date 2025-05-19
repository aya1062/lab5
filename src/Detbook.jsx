import React from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { removeFromshowlist } from './redux/slices/DetbookSlice'

function Detbook() {
     const wishlist = useSelector(state => state.DetbookReducer.Detbook)
    const dispatch = useDispatch()

    function remove(index) {
    dispatch(removeFromshowlist(index))
  }
  return (
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      {wishlist.map((book, index) => (
        <div className="card" key={index} style={{ width: "15rem" }}>
          <img src={book.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p className="card-text">{book.descrption}</p>
            <button className="btn btn-danger" onClick={() => remove(index)}>
              حذف الكتاب
            </button>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Detbook