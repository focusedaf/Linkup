const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full p-4 z-50">
      <footer className="bg-black rounded-lg w-full">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="#" className="hover:underline">
              Linkup™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
