import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import NavigationBar from './components/Navbar/Navbar';
import Signin from './pages/Signin/Signin';
import Register from './pages/Register/Register';

const App = () => {
  return (
    <>
    <NavigationBar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App