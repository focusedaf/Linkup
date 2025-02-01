import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; 
import {FiBell} from "react-icons/fi"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 w-full p-5 z-50 flex justify-between items-center bg-inherit">

      {/* logo */}
      <div className="flex">
        <span className="text-xl cursor-pointer text-white">Linkup</span>
      </div>

      {/* since beech ke tabs whatevs change horahe hai use ternary op to check the condition lol */}
      {isLoggedIn ? (
        // signed-in navbar
        <div className="flex items-center backdrop-blur-xl bg-gray/50 rounded-xl p-3 px-10 sm:ml-6">
          <div className="flex gap-6">
            <NavLink to="/friends" className="text-white font-semibold">
              Friends
            </NavLink>
            <NavLink to="/chat" className="text-white font-semibold">
              Chat
            </NavLink>
            <NavLink to="/vibes" className="text-white font-semibold">
              Vibes
            </NavLink>
            <NavLink to="/events" className="text-white font-semibold">
              Events
            </NavLink>
          </div>
        </div>
      ) : (
        //  pre-login navbar
        <div className="flex items-center backdrop-blur-xl bg-black/50 rounded-xl p-3 px-10 sm:ml-6">
          <div className="flex gap-6">
            <NavLink to="/" className="text-white font-semibold">
              Features
            </NavLink>
            <NavLink to="/" className="text-white font-semibold">
              Help
            </NavLink>
            <NavLink to="/" className="text-white font-semibold">
              Try A Demo
            </NavLink>
            <NavLink to="/" className="text-white font-semibold">
              About Us
            </NavLink>
          </div>
        </div>
      )}

      {/* right-side section */}
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          // signed-in user icons
          <>
            <FiBell className="text-white text-xl cursor-pointer" />
            <FaUserCircle className="text-white text-xl cursor-pointer" />
            <button
              onClick={() => setIsLoggedIn(false)}
              className="bg-gradient-to-t from-blue-500 to-gray-300 border border-gradient-to-r from-bg-gray-100 to-gray-300 rounded-xl px-4 py-2 text-white cursor-pointer"
            >
              Logout
            </button>
          </>
        ) : (
          //  login/signup button
          <div className="flex items-center justify-between space-x-4 ">
             
              <button
                onClick={() => setIsLoggedIn(true)}
                className="bg-white rounded-xl px-4 py-2  text-black cursor-pointer"
              >
                Login
              </button><button
                onClick={()=>(navigate('/signup'))}
                className="bg-gradient-to-t from-blue-500 to-gray-300 rounded-xl px-4 py-2 text-white cursor-pointer"
              >
                Signup
              </button>
              </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
