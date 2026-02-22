import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <span>Gabriel</span>
        </Link>

        <nav>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;