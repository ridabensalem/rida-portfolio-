import React, { useState } from "react";
import { BsList } from 'react-icons/bs';
import { IoIosClose } from 'react-icons/io';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav z-50 bg-gray-900 flex flex-row place-content-between items-center p-3 ">
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

      <div className={`navigation text-white   ${isOpen ? 'block' : 'hidden'} md:flex `}>
        <ul className="flex flex-col md:flex-row place-content-around font-coding-font gap-x-6 text-gray-light text-lg p-4" onClick={() => setIsOpen(!isOpen)}>
          <li className=" flex justify-end">
            <IoIosClose className="btn-close sm text-3xl md:hidden" onClick={() => setIsOpen(!isOpen)} />

          </li>
          <li className="link">
            <a className=" hover:text-white" href="#about" >
              About
            </a>
          </li>
          <li className="link">
            <a className=" hover:text-white" href="#experience">
              Experience
            </a>
          </li>
          <li className="link">
            <a className=" hover:text-white" href="#projects">
              Projects
            </a>
          </li>
          <li className="link">
            <a className=" hover:text-white" href="#skills">
              Skills
            </a>
          </li>
          <li className="link">
            <a className=" hover:text-white " href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
