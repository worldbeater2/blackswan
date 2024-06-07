import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-100 font-navFont ">
      {/* Mobile view */}
      <div className="flex justify-between items-center w-full lg:hidden px-4 py-2">
        <Link to={"/"} className="flex justify-center w-full">
          <img className="w-32 p-2.5 stroke-2" src="/Vector (1).svg" alt="Logo" />
        </Link>
        <button className="p-2 focus:outline-none" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden flex flex-col mr-10 pb-2 items-center mt-4 space-y-2">
          <Link to={"/about"} onClick={toggleMenu} className="text-sm">About Us</Link>
          <Link to={"/expertise"} onClick={toggleMenu} className="text-sm">Expertise</Link>
          <Link to={"/people"} onClick={toggleMenu} className="text-sm">People</Link>
          <Link to={"/insights"} onClick={toggleMenu} className="text-sm">Insights</Link>
          <Link to={"/contact"} onClick={toggleMenu} className="text-sm">Contact</Link>
          <Link to={"/career"} onClick={toggleMenu} className="text-sm">Career</Link>
          <Link to={"/products"} onClick={toggleMenu} className="text-sm">Products</Link>
        </div>
      )}

      {/* Larger screens view */}
      <div className="hidden lg:flex lg:items-center lg:justify-between w-full px-4 text-sm md:text-base lg:text-lg xl:text-xl">
        <div className="navbar-start">
          <ul className="flex">
            <li className="ml-7 mr-7">
              <Link to={"/about"}>About Us</Link>
            </li>
            <li className="mr-7">
              <Link to={"/expertise"}>Expertise</Link>
            </li>
            <li className="mr-7">
              <Link to={"/people"}>People</Link>
            </li>
            <li className="mr-5">
              <Link to={"/insights"}>Insights</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-center">
          <Link to={"/"}>
            <img className="  md:w-[100px] lg:w-[180px] xl:w-[180px] p-2.5 stroke-2" src="/Vector (1).svg" alt="Logo" />
          </Link>
        </div>

        <div className="navbar-end hidden lg:flex items-center">
        <ul className="flex items-center">
          <li className="ml-0 mr-7">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="mr-7">
            <Link to={"/career"}>Career</Link>
          </li>
          <li className="mr-7">
            <Link to={"/products"}>Products</Link>
          </li>
          <button className="btn btn-ghost btn-circle mr-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
