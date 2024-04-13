import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-100 mx-auto font-navFont text-xl">
      <div className="navbar-start">
        <div className="">
          <ul className="flex">
            <li className="ml-7 mr-7">
              <a>About Us </a>
            </li>
            <li className="mr-7">
              <a>Expertise</a>
            </li>
            <li className="mr-7">
              <a>People</a>
            </li>
            <li className="mr-5">
              <a>Insights</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <a className="">
          <img className="w-[250px] stroke-2" src="/logomain.svg"></img>
        </a>
      </div>

      <div className="navbar-end">
        <div className="">
          <ul className="flex items-center">
            <li className="ml-0 mr-7">
              <a>Contact</a>
            </li>
            <li className="mr-7">
              <a>Career</a>
            </li>
            <li className="mr-7">
              <a>Products</a>
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
    </div>
  );
};

export default Navbar;
