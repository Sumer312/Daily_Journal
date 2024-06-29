import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/about';
import Contact from './pages/contact';
import Compose from "./pages/compose";
import Home from './pages/home';
import Post from './pages/post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='post/:postTitle' element={<Post />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='compose' element={<Compose />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;

