// Create a function component named Navbar.js:
// Use some classes of Materialize to create a styled navbar. Check out the documentation
// Use React Router, Link and Navlink. Don’t forget to install npm install react-router-dom.
// Add a Link that points to the logo.
// Add three Navlink, pointing to /,/about and /contact

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        My Blog
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
