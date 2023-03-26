import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from '../AuthScreens/Login'
import Signup from '../AuthScreens/Signup'
import Home from '../Screens/Home.js'
import { ToastContainer, toast } from 'react-toastify';

function AppRouter() {
  return (
    <Router>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
        <Route path="home" element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default AppRouter
