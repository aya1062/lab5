import './App.css'
import Lib from './Lib';
import { NavLink, Route, Routes } from 'react-router-dom'
import SingleBook from './SingleBook';
import Detbook from './Detbook';

function App() {
  return (
    <>
    <Routes>
      <Route path='books' element={<Lib></Lib>}/>
      <Route path='wishlist' element={<Detbook></Detbook>}/>
    </Routes>
    <Lib />
    </> 
  )
}

export default App
