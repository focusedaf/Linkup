import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; 
import {FiBell} from "react-icons/fi"
import { Menu, UserCircle,ChevronLeft } from "lucide-react";
import {ExpandingSearch} from "../Components/index";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Features", slug: "/features", active: true },
    { name: "Help", slug: "/help", active: true },
    { name: "About us", slug: "/about", active: true },
    { name: "Try A Demo", slug: "/demo", active: true },
     
    { name: "Friends", slug: "/friends", active: true },
    { name: "Chat", slug: "/chat", active: true },
    { name: "Vibes", slug: "/vibes", active: true },
    { name: "Events", slug: "/events", active: true },
  ];
  return (
    <div className="bg-inherit flex w-full p-5 justify-between items-center  ">
      {/* logo */}
      <Link to={"/"} className="text-3xl font-medium">
        Linkup.
      </Link>

      <div className="hidden md:block ">
        <div className="hidden md:flex gap-5 text-gray-300 bg-black/50 p-4 rounded-2xl items-center">
          <ul className="flex gap-5 ">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-4 py-2 duration-200 hover:bg-white hover:text-black rounded-full cursor-pointer "
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <ExpandingSearch />
        <button className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
          <UserCircle className="w-5 h-5 md:hidden cursor-pointer" />
        </button>
        <button className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
          <FiBell className="w-5 h-5 md:hidden cursor-pointer" />
        </button>
        <button className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
          <Menu
            onClick={() => setIsLoggedIn(true)}
            className="w-6 h-6 cursor-pointer text-white hover:text-white md:hidden"
          />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-full  bg-black/40 backdrop-blur-md transition-transform transform ${
          isLoggedIn ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex flex-col text-white h-full">
          <div
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-4 p-4 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 text-gray-500" />
            <p>Back</p>
          </div>

          <div className="flex flex-col justify-between h-full">
            <div className="overflow-y-auto">
              {navItems.map(
                (item) =>
                  item.active && (
                    <NavLink
                      key={item.name}
                      onClick={() => setIsLoggedIn(false)}
                      className="py-4 pl-6 block hover:bg-gray-800 rounded-md  transition-colors duration-200 "
                      to={item.slug}
                    >
                      {item.name}
                    </NavLink>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

