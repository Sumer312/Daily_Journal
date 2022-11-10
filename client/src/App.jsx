import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/about';
import Contact from './pages/contact';
import Compose from "./pages/compose";
import Home from './pages/home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Admin from './admin/admin';

function App(){
  return(
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="signin" element={<Signin />} />
          <Route path='signup' element={<Signup />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='compose' element={<Compose />} />
        </Routes>
      </BrowserRouter>  
  )
}
export default App;

