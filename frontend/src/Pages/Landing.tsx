import {
  Footer,
  Navbar
} from "../Components/index";
import { VscArrowRight } from "react-icons/vsc";

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black absolute left-0 right-0 top-0 flex justify-start items-center min-h-screen pl-10">
        {/* left part of the page */}
        <div className="relative">
          {/* main heading */}
          <div className="text-4xl font-bold text-left mt-4">
            <h1>More than just a call, it's a</h1>
            <span className="text-blue-500 font-bold">connection!!</span>
          </div>

          {/* product description */}
          <div className="mt-4 text-gray-400 text-left font-semibold max-w-lg">
            <p>
              Crystal-clear video calls, built-in chat, and seamless screen
              sharing, all in one place.
            </p>
            <p>
              Connect instantly with friends, family, and teams anytime,
              anywhere.
            </p>
            <p>No downloads, no hassle!</p>
          </div>

          {/* get started button */}
          <div className="relative mt-6">
            <button className="bg-blue-700 text-white rounded-xl px-4 py-2 pr-10 flex items-center relative">
              <VscArrowRight className="w-6 h-6 absolute right-2 top-1/2 transform -translate-y-1/2" />
              Get Started
            </button>
          </div>
        </div>

        {/* right side of the page */}
        <div className="bg-black grid grid-cols-2 gap-3  h-screen w-full md:w-1/2 md:ml-auto  p-6 sm:p-20 ">
          <div className="bg-white rounded-xl flex items-center justify-center  sm:row-span-2">
            
          </div>
          <div className="bg-white rounded-xl flex items-center justify-center  sm:row-span-4">
            
          </div>
          <div className="bg-white rounded-xl flex items-center justify-center sm:row-span-4">
            
          </div>
          <div className="bg-white rounded-xl flex items-center justify-center sm:row-span-2">
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
