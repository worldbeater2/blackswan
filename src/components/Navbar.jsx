import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-gray-100 mx-auto bg-transparent font-navFont text-xl ">
      <div className="navbar-start">
        <div className="">
          <ul className="flex">
            <li className="ml-7 mr-7">
              <Link to={"/about"}>About Us </Link>
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
      </div>

      <div className="navbar-center">
        <Link to={"/"} className="">
          <img className="w-[250px] p-2 stroke-2" src="/Vector (1).svg"></img>
        </Link>
      </div>

      <div className="navbar-end">
        <div className="">
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
