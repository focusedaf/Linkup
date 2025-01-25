import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full p-4 z-50">
      <footer className="bg-black rounded-lg shadow m-4 w-full">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Linkup
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-200 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-white me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white  me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white  me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact 
                </a>
              </li>
            </ul>
          </div>
         
          <div className="mt-4 mb-4">
            <a
              href="https://www.github.com/your-repo"
              className="text-white hover:text-gray-400 mx-2"
            >
              GitHub
            </a>
          </div>
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()} {""}
            <a href="#" className="hover:text-white">
              Linkup 
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;