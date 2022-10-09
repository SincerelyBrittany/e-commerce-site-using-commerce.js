import {Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Products from './components/products';
import About from './components/about';
import Cart from './components/cart';
import Login from './components/login';
import Signup from './components/singup';
import Contact from './components/contact';


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
  )

}


export default App;
