import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import "../App.css";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="nav flex justify-center">
      <div className="flex justify-between p-3 md:p-2  items-center w-10/12">
        <div>
          <img src="./logo.png" alt="" className="w-16 " />
        </div>

        <div
          onClick={toggleMenu}
          className="text-2xl text-black cursor-pointer md:hidden"
        >
          {toggle ? <IoMdClose /> : <FaBarsStaggered />}
        </div>

        <div
          className={`${
            toggle ? "block" : "hidden"
          } absolute top-20 w-full md:w-fit left-0 md:flex  bg-gray-600 md:bg-transparent md:static text-center p-5 md:p-2 z-10 `}
        >
          <ul id="navbarActive" className="grid grid-cols-1 md:grid-cols-2">
            <NavLink
              className="py-3 px-4 font-bold text-white rounded-lg mr-3"
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className="py-3 px-4 font-bold text-white rounded-lg mr-3"
              to={"/product"}
            >
              Product
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
