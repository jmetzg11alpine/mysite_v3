import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { GiDonkey } from "react-icons/gi";

const NavBar = () => {
  const location = useLocation();
  return (
    <div className="nav-bar d-flex justify-content-between align-items-center px-5">
      <Link to="/">
        <GiDonkey
          className={`donkey-icon ${location.pathname === "/" ? "active" : ""}`}
        />
      </Link>
      <Nav.Link
        as={Link}
        to="/summary"
        className={location.pathname === "/summary" ? "active" : ""}
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
