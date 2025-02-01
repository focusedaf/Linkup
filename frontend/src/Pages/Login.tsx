import { useEffect } from "react";
import { LockClosedIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import {FcGoogle } from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'

const Login = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 min-h-screen w-screen flex items-center justify-center bg-[radial-gradient(500px_circle_at_bottom,_var(--tw-gradient-stops))] from-gradient via-mid to-background ">
      <div className="bg-blur max-w-[700px] text-center p-10 rounded-xl shadow-2xl">
        <h1 className="text-white text-3xl font-bold mb-2 ">
          Welcome to{" "}
          <span className="text-blue-500 font-bold">Linkup</span>
        </h1>

        <p className="text-gray-400 mb-5 text-sm">
          Login to access the services
        </p>

        <form action="#" className="flex flex-col">
          <div className="relative">
            <EnvelopeIcon className="w-6 h-6  absolute left-3 top-1/3 transform -translate-y-1/2 " />
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="p-3 pl-15  mb-4 w-full rounded-md bg-[#0D1B2A] border border-[#1B2A49] shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 "
              required
            />
          </div>

          <div className="relative">
            <LockClosedIcon className="w-6 h-6 absolute left-3 top-1/3 transform -translate-y-1/2 " />
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="p-3 pl-15 mb-4 w-full rounded-md bg-[#0D1B2A] border border-[#1B2A49] shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 "
              required
            />
          </div>
          <div className=" w-full relative">
            <FcGoogle className="w-6 h-6 absolute left-3 top-1/3 transform -translate-y-1/2 " />
            <button
              
              className="p-3 pl-15  mb-4 w-full rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-400 "> Signup With Google
              
           </button>
          </div>
          <div className="relative">
            <FaGithub className="w-6 h-6 absolute left-3 top-1/3 transform -translate-y-1/2 " />
            <button className="p-3 pl-15  mb-4 w-full rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-400 "> Signup With Github</button>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-gray-800"
              />
              <label className="ml-2 text-sm text-gray-300">
                {" "}
                Remember me{" "}
              </label>
            </div>
            <a
              href="#"
              className="text-sm text-blue-400 hover:text-blue-500 underline ml-3"
            >
              Forgot your password?
            </a>
          </div>

          <button className="mt-3 p-3 bg-gradient-to-r from-[#3A5BBC] to-[#4F72D4] cursor-pointer text-white hover:scale-105 hover:brightness-110 rounded-lg shadow-lg transition duration-300 font-semibold font-serif">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
