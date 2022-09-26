import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Main/Home'
import BigNav from './Main/BigNav'
import About_me from './Page/About_me'
import My_project from './Page/My_project copy'
import Contact from './Page/Contact'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/bignav" element={<BigNav/>} />
          <Route path="/about_me" element={<About_me/>} />
          <Route path="/my_project" element={<My_project/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App