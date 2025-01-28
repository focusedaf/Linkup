import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import Button from "./Buttons/Button_black";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 w-full p-4 z-50">
      <nav className="bg-black backdrop-blur-sm px-4 py-3 flex items-center justify-between w-full rounded-full border border-zinc-700/50">
        <div className="flex items-center">
          <NavLink
            to="/"
            className="text-white font-semibold flex flex-col items-center gap-1"
          >
            <p>Linkup</p>
          </NavLink>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        
        <div className="text-white flex-items-center justify-center hidden lg:flex items-center space-x-4 ml-6">
          <div className="flex gap-6 ">
            <NavLink
              to="/"
              className="font-semibold flex flex-col items-center gap-1"
            >
              <p>Home</p>
            </NavLink>

            <NavLink
              to="/about"
              className="font-semibold flex flex-col items-center gap-1"
            >
              <p>About Us</p>
            </NavLink>

            <NavLink
              to="/create"
              className="font-semibold flex flex-col items-center gap-1"
            >
              <p>Create A Call</p>
            </NavLink>

            <NavLink
              to="/login"
              className="font-semibold flex flex-col items-center gap-1"
            >
              <p>Login</p>
            </NavLink>
          </div>
        </div>

        
        <div className="hidden lg:flex items-center space-x-4">
          <button className="bg-white text-black px-4 py-1.5 rounded-full hover:bg-gray-100">
            Login
            <ChevronRight className="inline ml-1" size={16} />
          </button>
          <Button className="border border-zinc-700 text-white px-4 py-1.5 rounded-full hover:bg-zinc-800">
            Sign Up
          </Button>
        </div>

       
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full mt-2  left-0 right-0 bg-black rounded-2xl border border-zinc-700/50 backdrop-blur-sm">
            <div className="flex flex-col p-4 space-y-4">
              <a href="/" className="text-white flex items-center justify-center">
                <span className="text-green-500 mr-2"></span>
                Home
              </a>
              <a href="/about" className="text-gray-300 hover:text-white">
                About Us
              </a>
              <a href="/create" className="text-gray-300 hover:text-white">
                Create A Call
              </a>
              <a href="/login" className="text-gray-300 hover:text-white">
                Login
              </a>
              <button className="bg-white text-black px-4 py-1.5 rounded-full hover:bg-gray-100 w-full">
                Register
                <ChevronRight className="inline ml-1" size={16} />
              </button>
              <button className="border border-zinc-700 text-white px-4 py-1.5 rounded-full hover:bg-zinc-800 w-full">
                SignUp
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
