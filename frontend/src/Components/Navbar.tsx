import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    /* pre-login navbar */
    <div className="fixed top-0 left-0 right-0 w-full p-5 z-50 flex justify-between items-center bg-black">

      {/* logo */}
      <div className="flex ">
        <span className="text-3xl   cursor-pointer">Linkup</span>
      </div>

      {/* features */}
      <div
        className="flex items-center
      bg-[#1C1C1C] rounded-xl p-3 px-10 sm:ml-6"
      >
        <div className="flex gap-6 ">
          <NavLink to="/" className="text-white font-semibold">
            <p>Features</p>
          </NavLink>

          <NavLink to="/" className="text-white font-semibold">
            <p>Help</p>
          </NavLink>

          <NavLink to="/" className="text-white font-semibold ">
            <p>Try A Demo</p>
          </NavLink>

          <NavLink to="/" className="text-white font-semibold ">
            <p>About Us</p>
          </NavLink>
        </div>
      </div>

      <div className="flex ml-10 ">
        <button className="bg-[#2F158E] rounded-xl  px-4 py-2 text-white  cursor-pointer">
          Login/Signup
        </button>
      </div>
    </div>
    
  );
};

export default Navbar;
