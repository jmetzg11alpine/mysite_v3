import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route as RouteComponent,
} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Summary from "./components/summary/Summary";
import MapContainer from "./components/map/MapContainer";
import Stocks from "./components/stocks/Stocks";
import JesseContainer from "./components/jesse/JesseContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  useEffect(() => {
    const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  });
  return (
    <Router>
      <NavBar />
      <Routes>
        <RouteComponent path="/" element={<Home />} />
        <RouteComponent path="/summary" element={<Summary />} />
        <RouteComponent path="/map" element={<MapContainer />} />
        <RouteComponent
          path="/stocks"
          element={<Stocks height={height} width={width} />}
        />
        <RouteComponent
          path="/portfolio"
          element={<JesseContainer height={height} width={width} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
