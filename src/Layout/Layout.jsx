import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-3 pb-12">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
