import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './Navbar.css';
const Navbar = ({ title }) => {
  return (
    <nav className="navbar-main">
      <div className="navbar-container">
        <div className="navbar-nav-flex">
          <FaGithub className="navbar-nav-github-finder-logo" />
          <Link to="/" className="navbar-nav-github-finder-text">
            {title}
          </Link>
        </div>
        <div className="navbar-nav-flex-items-equal">
          <div className="navbar-nav-flex-items-ends">
            <Link to="/" className="navbar-nav-bg-rounded">
              Home
            </Link>
            <Link to="/about" className="navbar-nav-bg-rounded">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
};

Navbar.prototype = {
  title: PropTypes.string,
};

export default Navbar;
