import React, { useState } from "react";
import Logo from "./Logo";

import MenuMobile from "../menu-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOpenMenu = () => {
    if(!isMenuOpen) {
      setIsMenuOpen(true)
      return
    }
    setIsMenuOpen(false)
    return
  }

  return (
    <nav className="flex flex-col fixed w-full justify-center py-3 shadow-lg" style={{ backgroundColor: '#20232a' }}>
      <div className="container flex self-center justify-between items-center px-4 sm:px-8">
        <Logo />

        <div className="flex items-center hidden sm:block">
          <a href="/" className="text-white text-normal hover:text-white mr-4">
            Sobre
          </a>
          <a
            target="_blank"
            href="https://github.com/ChristopherHauschild/flexbox-app-react"
            className="transition ease-in-out duration-700 text-normal px-5 py-1 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white"
          >
            Código
          </a>
        </div>

        <div className="block sm:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white outline-none"
            onClick={handleOpenMenu}>
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div className='block sm:hidden'>
        {isMenuOpen && <MenuMobile />}
      </div>
    </nav>
  );
};

export default Header;
