import './App.css'
import Lib from './Lib';
import { NavLink, Route, Routes } from 'react-router-dom'
import SingleBook from './SingleBook';
import Detbook from './Detbook';

function App() {
  return (
    <>
    <ul>
      <li><NavLink to="/Lib">Show Books</NavLink></li>
<li><NavLink to="/Detbook">Show Wishlist</NavLink></li>

    </ul>
    <Routes>
      <Route path='Lib' element={<Lib></Lib>}></Route>
      <Route path='Detbook' element={<Detbook></Detbook>}></Route>
    </Routes>
    </> 
  )
}

export default App
