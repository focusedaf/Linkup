
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 w-full p-4 z-50">
      <nav className="bg-black backdrop-blur-sm px-4 py-3 flex items-center justify-between w-full rounded-full border border-zinc-700/50">
        <div className="flex items-center">
          <a href="#" className="flex flex-col items-center gap-1">
            <p>Linkup</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
