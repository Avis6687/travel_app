import React,{useState} from 'react'
import './Navbar.css'
import {GiCommercialAirplane} from  'react-icons/gi'
import {IoMdCloseCircle} from  'react-icons/io'
import {TbGridDots} from  'react-icons/tb'

const Navbar = () => {
  const [active, setActive] =useState('navBar')
  //function to  toggle a navbar
  const showNav=()=>{
    setActive('navBar activeNavbar')
  }
   //function to  close a navbar
   const removeNavbar=()=>{
    setActive('navBar ')
  }
  

  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href='#' className="logo flex">
            <h1><GiCommercialAirplane className="icon"/> Tripp</h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href='#' className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href='#' className="navLink">Package</a>
            </li>
            <li className="navItem">
              <a href='#' className="navLink">Shop</a>
            </li>
            <li className="navItem">
              <a href='#' className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href='#' className="navLink">Pages</a>
            </li>
            <li className="navItem">
              <a href='#' className="navLink">News</a>
            </li>
            <li className="navItem">
              <a href='#' className="navLink">Contact</a>
            </li>
            <button className='btn'>
            <a href='#'>Book Now</a>
          </button>
          <div onClick={removeNavbar} className="closeNavbar">
            <IoMdCloseCircle className="icon"/>
          </div>
          </ul>
          
          
        </div>
        <div onClick={showNav} className="togglerNavbar">
          <TbGridDots className="icon"/>
        </div>
      </header>

    </section>
  )
}

export default Navbar
