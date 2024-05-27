import React from 'react';
import './App.css';

export default function App() {
  return (
    <>
      <Start/>
    </>
  )
}


import Routes from './Routes';
import HomePage from './components/Home/HomePage';
import Navbar from 'D:/Projects/E-commers/E-commers/src/components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer';


function Start() {
  return (
    <>
    <Navbar/>
    <Routes/>
    <HomePage/>
    <Footer/>
      
    </>
  )
}
