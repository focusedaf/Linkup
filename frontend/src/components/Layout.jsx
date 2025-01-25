import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const location = useLocation(); // React Router hook for getting the current path
  const currentPath = location.pathname;

  // Check if the current path is either signup or login
  const hideNavbar = currentPath === '/signup' || currentPath === '/login';

  return (
    <>
      {/* Conditionally render Navbar */}
      {!hideNavbar && <Navbar />}

      {/* Main content */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
