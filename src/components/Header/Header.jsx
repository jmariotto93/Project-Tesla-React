import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import './styles.css'
import { useRef } from 'react';
import { Logo } from '../Logo/Logo'
import { Links } from '../Links/Links'

export const Header = () => {

    const navRef = useRef();
  
    const showNavBar = () => {
      navRef.current.classList.toggle("responsive_nav");
    }
  return (
    <>
    <header>
       <Logo />
       <nav ref={navRef}>
          <Links Href={"#informacoes"} anchor={"INFORMAÇÕES"}/>
          <Links Href={"#contatos"} anchor={"CONTATOS"}/>
          <Links Href={"#horarios"} anchor={"HORÁRIOS"}/>
              <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                <FaTimes/>
              </button>
          </nav>
          <button className='nav-btn' onClick={showNavBar}>
              <FaBars/>
          </button>
    </header>
    </>
  )
}
