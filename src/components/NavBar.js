import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  return (
    <div className="nav-bar d-flex justify-content-between align-items-center px-5">
      <Nav.Link
        as={Link}
        to="/"
        className={location.pathname === "/" ? "active" : ""}
      >
        Work Summary
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="/map"
        className={location.pathname === "/map" ? "active" : ""}
      >
        Map
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="/stocks"
        className={location.pathname === "/stocks" ? "active" : ""}
      >
        S&P 500
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="/portfolio"
        className={location.pathname === "/portfolio" ? "active" : ""}
      >
        Joe's Investments
      </Nav.Link>
    </div>
  );
};

export default NavBar;
