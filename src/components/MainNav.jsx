import React from "react";
import { Link } from "react-router";
import logo from "../../src/assets/logo.png"
const MainNav = () => {
  return (
    <nav className="bg-white shadow-md font-sans">
      <div className="mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="flex items-center gap-12">
          {/* Logo  */}
          <div className="flex items-center gap-3">
            <div > 
            <Link to="/">
        <img 
          src="../../src/assets/logo.png" 
          alt="Logo" 
          className="h-10  w-30" 
        />
      </Link>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center gap-6 text-gray-800">
            <Link to="/" className="hover:text-gray-500">Home</Link>
            <Link to="/shop" className="hover:text-gray-500">Shop</Link>
            <Link to="/cart" className="hover:text-gray-500">Cart</Link>
          </div>
        </div>
        
       
        <div className="flex items-center gap-6">
          <Link to="/register" className=" text-gray-800 hover:text-gray-500">Register</Link>
          <Link to="/login" className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
