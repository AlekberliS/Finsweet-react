import { useState } from 'react';
import { Link } from 'react-router-dom';  // Link import edildi
import logo from '../assets/images/Logolit.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header bg-bg-head py-4">
      <div className="max-w-screen-xl mx-auto px-5 md:px-20 flex justify-between items-center">
        <div className="header__left">
          {/* Logoya Home page'e yönlendirme eklendi */}
          <Link to="/">
            <img src={logo} alt="Company Logo" className="w-20 lg:w-28 cursor-pointer" />
          </Link>
        </div>

        <div className="header__right flex items-center">
          <button 
            className="text-white md:hidden focus:outline-none" 
            onClick={toggleMenu}
          >
            <svg 
              className="w-8 h-8" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <nav className="hidden md:flex">
            <ul className="header__nav__ul flex space-x-6 text-lg md:text-base text-white">
              <li>
                <Link to="/" className="cursor-pointer hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="cursor-pointer hover:text-gray-300">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/features" className="cursor-pointer hover:text-gray-300">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="cursor-pointer hover:text-gray-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/faq" className="cursor-pointer hover:text-gray-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="cursor-pointer hover:text-gray-300">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header__button ml-4 hidden md:block">
            <Link to="/contact">
              <button className="text-white border border-white py-2 px-4 rounded-full hover:text-gray-300 hover:border-gray-300">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-bg-head p-4 absolute top-16 left-0 w-full z-50">
          <ul className="flex flex-col space-y-4 text-white">
            <li onClick={closeMenu}>
              <Link to="/" className="cursor-pointer hover:text-gray-300">
                Home
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/about" className="cursor-pointer hover:text-gray-300">
                About us
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/features" className="cursor-pointer hover:text-gray-300">
                Features
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/pricing" className="cursor-pointer hover:text-gray-300">
                Pricing
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/faq" className="cursor-pointer hover:text-gray-300">
                FAQ
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/blog" className="cursor-pointer hover:text-gray-300">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
