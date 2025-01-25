import React from 'react'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 right-0 w-full p-4 z-500 rounded-md'> 
    <header className="rounded-lg w-full bg-black shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        
        <h1 className="text-xl font-bold text-white">Linkup</h1>
      </div>
      <nav className="flex items-center jsutify-center space-x-6 hidden md:flex">
        <a href="/" className=       "text-white hover:text-gray-400 transition">Home</a>
        <a href="/about" className=  "text-white hover:text-gray-400 transition">About</a>
        <a href="/service" className="text-white hover:text-gray-400 transition">Service</a>
        <a href="/product" className="text-white hover:text-gray-400 transition">Product</a>
        <a href="/blog" className=   "text-white hover:text-gray-400 transition">Blog</a>
        <a href="/contact" className="backdrop-blur bg-white text-black px-4 py-2 rounded-md hover:bg-black transition">Contact Us</a>
      </nav>
    </header>
    </div>
  );
}

export default Header
