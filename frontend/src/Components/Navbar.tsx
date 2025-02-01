import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle, FaBell } from "react-icons/fa"; 

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <div className="fixed top-0 left-0 right-0 w-full p-5 z-50 flex justify-between items-center bg-black">

      {/* logo */}
      <div className="flex">
        <span className="text-3xl cursor-pointer text-white">Linkup</span>
      </div>

      {/* since beech ke tabs whatevs change horahe hai use ternary op to check the condition lol */}
      {isLoggedIn ? (
        // signed-in navbar
        <div className="flex items-center bg-[#1C1C1C] rounded-xl p-3 px-10 sm:ml-6">
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
        <div className="flex items-center bg-[#1C1C1C] rounded-xl p-3 px-10 sm:ml-6">
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
            <FaBell className="text-white text-2xl cursor-pointer" />
            <FaUserCircle className="text-white text-2xl cursor-pointer" />
            <button
              onClick={() => setIsLoggedIn(false)}
              className="bg-red-500 rounded-xl px-4 py-2 text-white cursor-pointer"
            >
              Logout
            </button>
          </>
        ) : (
          //  login/signup button
          <button
            onClick={() => setIsLoggedIn(true)}
            className="bg-[#2F158E] rounded-xl px-4 py-2 text-white cursor-pointer"
          >
            Login/Signup
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
