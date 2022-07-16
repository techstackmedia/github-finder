import PropTypes from 'prop-types';
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
