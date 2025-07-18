import React, { useEffect, useState } from 'react'
import { FaCartPlus, FaSearch } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { LiaBarsSolid } from 'react-icons/lia'
import { TfiShoppingCart } from 'react-icons/tfi'
import { IoIosSearch } from 'react-icons/io'
import logo from '../images/logo.png.webp'
import { Link } from 'react-router-dom'


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="navbar flex lg:justify-around justify-between px-3 py-3 items-center fixed top-0 left-0 w-full z-10 bg-white">
        <div className="logo">
          <img className='' src={logo} alt='' />
        </div>
        <div className="nav-link lg:block hidden">
          <ol className='flex'>
            <Link to="/" className='m-5 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out'>Home</Link>
            <li className='m-5 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out'>Shop</li>
            <div className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <li className='m-5 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out' >Blog</li>
              {isOpen && (
                <div className="absolute left-0 w-48 py-5 px-2 bg-white border border-gray-200 rounded-md shadow-lg  transition duration-150 ease-in-out" data-aos="fade-up">
                  <Link to="/home" href="/blog/post1" className="block px-3 py-2 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out">Blog</Link>
                  <Link to="/blogdetails" href="/blog/post2" className="block px-3 py-2 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out">Blog Details</Link>
                </div>
              )}
            </div>
            <li className='m-5 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out ' >Pages</li>
            <hr />
            <li className='m-5 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out ' >Contact</li>
          </ol>
        </div>
        <div className="icons flex items-center lg:flex hidden">
          <div className='flex mr-3'>
            <IoIosSearch className='m-2 cursor-pointer hover:text-blue-600 transition duration-150 ease-in-out text-xl ' />
            <TfiShoppingCart className='m-2 cursor-pointer hover:text-blue-600 transition duration-150 ease-in-out ' />
          </div>
          <button className="lg:block hidden buy-now border border-gray-300 rounded-full w-40 hover:border-blue-600 cursor-pointer transition duration-150 ease-in-out p-3 ml-8">
            Buy Now
          </button>
        </div>
        <div className='lg:hidden block' onClick={toggleMenu}>
          {isMenuOpen ?
            <RxCross2 className='font-bold cursor-pointer transition duration-150 ease-in-out text-xl ' />
            :
            <LiaBarsSolid className='cursor-pointer transition duration-150 ease-in-out text-xl ' />
          }
        </div>
      </div>
      {/* hamburger togglemenu*/}
      {isMenuOpen &&
        <div className="nav-link m-5 p-3" data-aos="fade-down">
          <ol className='flex-col'>
            <li className='m-5 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out '>Home</li>
            <li className='m-5 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out '>Shop</li>
            <li className='m-5 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out '>Blog</li>
            <li className='m-5 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out '>Pages</li>
            <li className='m-5 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out '>Contact</li>
          </ol>
          <div className="icons flex items-center mx-3">
            <IoIosSearch className='m-2 cursor-pointer hover:text-blue-600 transition duration-150 ease-in-out text-xl ' />
            <TfiShoppingCart className='m-2 cursor-pointer hover:text-blue-600 transition duration-150 ease-in-out ' />
            <button className="buy-now border border-gray-300 rounded-full w-40 hover:border-blue-600 transition duration-150 ease-in-out p-3 mx-5 cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>
      }
    </>
  )
}