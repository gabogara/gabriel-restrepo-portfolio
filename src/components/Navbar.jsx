import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar_inner">
        <Link className="brand" to="/">
          <span className="brand_accent">G</span>
          <span className="brand_text">abriel</span>
        </Link>

        <nav className="nav">
          <Link className="nav_link" to="/about">
            About
          </Link>
          <Link className="nav_link" to="/projects">
            Projects
          </Link>
          <Link className="nav_link" to="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
