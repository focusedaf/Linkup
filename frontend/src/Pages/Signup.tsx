import { useEffect } from "react"
import { LockClosedIcon, EnvelopeIcon, UserIcon } from "@heroicons/react/24/solid";

const Signup = () => {
    // its a react hook
    useEffect(() => {
        // disables scrolling on the page
        document.body.style.overflow = "hidden";
    
        return () => {
          // re-enables scrolling when the component unmounts
          document.body.style.overflow = "auto";
        };
      }, []);  // empty dependency array means this effect runs only on mount/unmount

  return (
    <div className="absolute top-0 left-0 flex min-h-screen w-screen justify-center items-center bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-gray-300 to-blue-900 ">
      <div className="bg-[#121826] max-w-[700px] text-center p-10 rounded-xl shadow-2xl">
        <h2 className="text-white text-3xl font-bold mb-2 font-serif ">
          Create an account
        </h2>
        <p className="mb-5  text-sm">
          Already have an account?{" "}
          <a href="#" className="text-blue-400 hover:text-blue-500 underline">
            Login
          </a>{" "}
        </p>

        <form method="#" action="#" className="flex flex-col">
          <div className="relative">
            <UserIcon className="w-6 h-6 absolute left-3 top-1/3 transform -translate-y-1/2 " />
            <input
              type="text"
              placeholder="Name"
              className="p-3 pl-15 mb-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border border-[#1B2A49] "
              required
            />
          </div>

          <div className="relative">
            <EnvelopeIcon className="w-6 h-6 absolute left-3 top-1/3 transform -translate-y-1/2  " />
            <input
              type="email"
              placeholder="Email"
              className="p-3 pl-15 mb-4 w-full rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-400 border border-[#1B2A49] "
              required
            />
          </div>

          <div className="relative">
            <LockClosedIcon className="w-6 h-6 absolute left-3 top-1/3 transform -translate-y-1/2 " />
            <input
              type="password"
              placeholder="Password"
              className="p-3 pl-15  mb-4 w-full rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-400 border border-[#1B2A49] "
              required
            />
          </div>

          <div className="flex justify-center mt-2 mb-4 text-sm">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-gray-800"
            />
            <p className="ml-2">
              I agree to the
              <a
                href="#"
                className="text-blue-400 hover:text-blue-500 underline ml-2"
              >
                Terms&Conditions
              </a>
            </p>
          </div>

          <button className=" mt-4 p-3 w-full cursor-pointer font-semibold bg-gradient-to-r from-[#3A5BBC] to-[#4F72D4] hover:scale-105 hover:brightness-110 rounded-lg shadow-lg transition duration-300 ">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup