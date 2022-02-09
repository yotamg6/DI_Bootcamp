import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        My Weather App
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorties</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
