import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  const user = JSON.parse(localStorage.getItem("users"));

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  const cartItems = useSelector((state) => state.cart);

  const navList = (
    <ul className="flex space-x-8 text-white font-medium text-md px-5 font-serif ">
      <li className="hover:text-cyan-100">
        <Link to={"/"}>Home</Link>
      </li>

      <li className="hover:text-cyan-100">
        <Link to={"/allproduct"}>All Product</Link>
      </li>

      {!user ? (
        <li className="hover:text-cyan-100">
          <Link to={"/signup"}>Signup</Link>
        </li>
      ) : (
        ""
      )}

      {!user ? (
        <li className="hover:text-cyan-100">
          <Link to={"/login"}>Login</Link>
        </li>
      ) : (
        ""
      )}

      {user?.role === "user" && (
        <li className="hover:text-cyan-100">
          <Link to={"/user-dashboard"}>User</Link>
        </li>
      )}

      {user?.role === "admin" && (
        <li className="hover:text-cyan-100">
          <Link to={"/admin-dashboard"}>Admin</Link>
        </li>
      )}

      <li className="hover:text-cyan-100">
        <Link to={"/cart"}>Cart({cartItems.length})</Link>
      </li>

      {user && (
        <li className="cursor-pointer hover:text-cyan-100 " onClick={logout}>
          logout
        </li>
      )}
    </ul>
  );
  return (
    <nav className="bg-cyan-800 sticky top-0 ">
      <div className="lg:flex lg:justify-between items-center py-2 lg:px-3 font-serif ">
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2
              className=" font-bold text-white text-2xl text-center px-2"
              data-aos="zoom-in"
            >
              Multi-store
            </h2>
          </Link>
        </div>

        <div
          className="right flex justify-center mb-4 lg:mb-0"
          data-aos="zoom-in"
        >
          {navList}
        </div>

        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
