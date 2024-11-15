import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCogs, faInfoCircle, faBlog, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Login from '../pages/Login';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const navItems = [
    { path: "/", link: "Home", icon: faHome },
    { path: "/services", link: "Services", icon: faCogs },
    { path: "/about", link: "About", icon: faInfoCircle },
    { path: "/blog", link: "Blog", icon: faBlog },
    { path: "/contact", link: "Contact", icon: faEnvelope },
  ];

  return (
    <header className="bg-black text-white fixed left-0 top-0 right-0 z-10">
      <nav className="px-4 py-4 flex justify-between items-center">
        {/* Brand/Logo */}
        <a href="/" className="text-2xl font-bold font-serif">
          Avi<span className="text-orange-500">Blogs</span>
        </a>

        {/* Navigation Items */}
        <ul
          className={`lg:flex gap-10 font-bold text-lg ${
            isMenuOpen ? 'hidden' : 'flex' 
          } lg:block absolute md:static top-16 left-0 w-full md:w-auto bg-black`}
        >
          {navItems.map(({ path, link, icon }) => (
            <li className="text-white text-center md:text-left py-2 md:py-0" key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex justify-center md:justify-start items-center gap-x-2 hover:text-orange-500 transition-colors duration-300 ${
                    isActive ? 'text-orange-500' : 'text-white'
                  }`
                }
              >
                <FontAwesomeIcon icon={icon} className="text-xl" />
                <span>{link}</span>
              </NavLink >
            </li>
          ))}
        </ul>
        <button
          className="lg:hidden text-white ml-32 text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        {/* Login Button */}
      
        <Link to="/login" > <button className="bg-orange-500 mr-2  text-white px-4 py-2 rounded-lg font-bold hover:text-orange-500 hover:bg-white transition-all duration-500 lg:block">
        Login
        </button></Link>

        {/* Hamburger Menu Button */}
      
      </nav>
    </header>
  );
};

export default Navbar;
