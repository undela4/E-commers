import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import './Navbar.css'



import Baner from './Baner';

export default function Navbar() {
  return (
    <>
    <Baner/>
    <Nav/>
    </>
  )
}



import {Bandage} from  'D:/Projects/E-commers/E-commers/src/assets/img.js';
import { IoIosArrowDown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";


const navlinks=[
  {
    id:1,
    title:"Home",
    path:"/",
    cName:"nav-links",

  },
  {
    id:2,
    title:"Shop ",
    path:"/shop",
    cName:"nav-links",
    Component:<IoIosArrowDown />,


  },
  {
    id:3,
    title:"About",
    path:"/about",
    cName:"nav-links"

  },
  {
    id:4,
    title:"Blog",
    path:"/blog",
    cName:"nav-links"

  },
  {
    id:5,
    title:"Contact",
    path:"/contact",
    cName:"nav-links"

  }
]


function Nav() {
  return (
    <>
      <div className="containe ">

        <div className="nav-bar">

          <div className="logo">
          <img src={Bandage} width={100} height={30} alt="logo" />

          </div>

          <div className="nav-items">
            <div className="nav-items-left">
              {
                navlinks.map((item, index) => {
                  return (
                    <NavLink  className="NavLink" to={item.path} key={item.id}>
                      {item.title}{item.Component}
                    </NavLink>
                  )
                })
              }

            </div>

            <div className="nav-items-right">
              <NavLink to="/"  className="NavLink"><RxAvatar />  Login /
              <NavLink to="/"  className="NavLink">  Register</NavLink>
              </NavLink>
              <NavLink to="/"  className="NavLink"><IoIosSearch className='nav-icons' /></NavLink>
              <NavLink to="/"  className="NavLink"><CiShoppingCart className='nav-icons'/><span> 1</span></NavLink>
              <NavLink to="/"  className="NavLink"><CiHeart className='nav-icons'/><span> 1</span></NavLink>
              
              </div>

          </div>


        </div>
      </div>
    </>
  )
}
