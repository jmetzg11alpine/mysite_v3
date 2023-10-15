import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
const Home = () => {
  const location = useLocation();
  const downLoadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Metzger-Resume.pdf";
    link.click();
  };
  return (
    <div>
      <div className="home-section">
        <div className="home-title">Welcome</div>
        <div className="home-info">
          I am a full-stack developer with expertise in React and Django,
          currently contributing to a logistics company's success. My journey
          began in the field of data science, inspired by my background in
          Econometrics.
        </div>
        <div className="home-info">
          While data science was intriguing, I found greater fulfillment in
          creating solutions that reach a broader audience. For more details on
          my professional journey, please refer to my{" "}
          <a className="home-clickable-link" onClick={downLoadResume}>
            resume
          </a>
        </div>
      </div>
      <div className="home-section">
        <div className="home-title">This Site</div>
        <div className="home-info">
          This site serves as a work sample and an opportority for me to
          practice some of the things that interest me the most. All the code
          can be found{" "}
          <a href="https://github.com/jmetzg11" target="_blank">
            here
          </a>
        </div>
        <div className="home-minor-title">
          <Nav.Link
            as={Link}
            to="/summary"
            className={`home-clickable-link ${
              location.pathname === "/summary" ? "active" : ""
            }`}
          >
            Work Summary
          </Nav.Link>
        </div>
        <div className="home-info">
          Here you can find more details about what I've done in my current
          position and the results it has had
        </div>
        <div className="home-minor-title">
          <Nav.Link
            as={Link}
            to="/map"
            className={`home-clickable-link ${
              location.pathname === "/map" ? "active" : ""
            }`}
          >
            Map
          </Nav.Link>
        </div>
        <div className="home-info">
          Before 2020 I was travelling a lot. With ArcGIS we can easily see the
          places I've been.
        </div>
        <div className="home-minor-title">
          <Nav.Link
            as={Link}
            to="/stocks"
            className={`home-clickable-link ${
              location.pathname === "/stocks" ? "active" : ""
            }`}
          >
            S&P 500
          </Nav.Link>
        </div>
        <div className="home-info">
          Using a scheduled cron job to execute a Python script each morning, we
          can analyze current market trends in key sectors and generate
          visualizations with D3.js.
        </div>
        <div className="home-minor-title">
          <Nav.Link
            as={Link}
            to="/portfolio"
            className={`home-clickable-link ${
              location.pathname === "/portfolio" ? "active" : ""
            }`}
          >
            Joe's Investents
          </Nav.Link>
        </div>
        <div className="home-info">
          Comprehensive analysis of an investment portfolio including
          proportions, unrealized losses and gains, and sector allocations all
          displayed with D3.js
        </div>
      </div>
    </div>
  );
};

export default Home;
