import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Navbar from 'D:/Projects/E-commers/E-commers/src/components/Navbar/Navbar.jsx';
import Login from './components/Authentication/Login/Login';
import Signup from './components/Authentication/SignUp/Signup';
import HomePage from './components/Home/HomePage';




export default function RoutesC() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<HomePage/>} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/signup" element={<Signup/>} />
      </Routes>

    </>
  )
}
