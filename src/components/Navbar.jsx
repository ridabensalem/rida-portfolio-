import React, { useState } from "react";
import {BsList} from 'react-icons/bs';
import {IoIosClose} from 'react-icons/io';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-main-bg flex flex-row place-content-between items-center p-5 md:sticky ">
      <div className="logo font-main-font text-coding-color text-3xl font-bold">
        RIDA
      </div>
      <div className="humbugger-container  sm:flex md:hidden">
      <button
        className="md:hidden rounded-md text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">Open main menu</span>
        <BsList className="h-6 w-6 text-coding-color" />
      </button>
        </div>      

      <div className={`navigation text-white ${isOpen ? 'absolute' : 'hidden'} md:flex bg-main-bg`}>
        <ul className="flex flex-col md:flex-row place-content-around font-coding-font gap-x-4 text-gray-light text-base p-4">
       <li className=" flex justify-end">
       <IoIosClose className="btn-close text-3xl md:hidden" onClick={() => setIsOpen(!isOpen)}/>
        
       </li>
          <li  className="link">
            <a className="hover:text-white" href="#about">
              <span className=" text-coding-color  number-nav ">1.</span>About
            </a>
          </li>
          <li className="link">
            <a className="hover:text-white" href="#experience">
              <span className="text-coding-color number-nav ">2.</span>Experience
            </a>
          </li>
          <li className="link">
            <a className="hover:text-white" href="#skills">
              <span className="text-coding-color  number-nav">3.</span>Skills
            </a>
          </li>
          <li className="link">
            <a className="hover:text-white" href="#projects">
              <span className="text-coding-color number-nav">4.</span>Projects
            </a>
          </li>
          <li className="link">
            <a className="hover:text-white " href="#contact">
              <span className="text-coding-color number-nav">5.</span>Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
