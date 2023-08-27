import React from 'react';
import './css/style.css';
import './App.css';

import { Home } from './component/Home.jsx';
import { Admin } from './component/Admin.jsx';

import { Shop } from './component/Shop.jsx';
import { Blog } from './component/Blog.jsx';
import { Contact } from './component/Contact.jsx';
import { Cart } from './component/Cart.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

  

function NavBar() {
  return (
    <section id='header'>
      <img src='Daraz-logo.png' alt='logo' id='logo' />
      <ul className="nav">
        <li>
          <Link to="admin">Admin</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div>
        <div>
          <NavBar />
          <Routes>
            
            <Route path='/admin' element={<Admin />} />
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
