import { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import SP from "./SP";
import Box from "./Box";
import SectorGraph from "./SectorGraph";
import InfoCard from "./InfoCard";
import { getSPData, boxDataKeys, getBoxDataFromDate } from "./helpers";

const Stocks = ({ height, width }) => {
  const [boxData, setBoxData] = useState([]);
  const [spData, setSPData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newDate, setNewDate] = useState(0);
  const [showSectorGraph, setShowSectorGraph] = useState(false);
  const [sectorData, setSectorData] = useState([]);
  const [spBackground, setSpBackground] = useState("sp-good");
  const [currSector, setCurrSector] = useState("");
  const headerHeight = 50;
  useEffect(() => {
    setIsLoading(true);
    getSPData(setBoxData, setSPData, setIsLoading, setSpBackground);
  }, []);
  useEffect(() => {
    if (newDate !== 0) {
      getBoxDataFromDate(newDate, setBoxData, setSpBackground);
    }
  }, [newDate]);
  return (
    <Container className="sp-container" fluid>
      <Row style={{ height: (height - headerHeight) * 0.3333 }}>
        {isLoading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <Col
            className={`d-flex align-items-center justify-content-center p-0 ${spBackground}`}
          >
            <SP
              spData={spData}
              height={(height - headerHeight) * 0.3333}
              width={width}
              setNewDate={setNewDate}
              setShowSectorGraph={setShowSectorGraph}
              spBackground={spBackground}
            />
          </Col>
        )}
      </Row>
      {showSectorGraph ? (
        <SectorGraph
          currSector={currSector}
          sectorData={sectorData}
          height={(height - headerHeight) * 0.6666}
          width={width}
        />
      ) : (
        <Row style={{ height: (height - headerHeight) * 0.6666 }}>
          <Col xs={12} md={6} className="p-0">
            <InfoCard />
          </Col>
          {boxDataKeys.map((key) => (
            <Col xs={6} md={3} key={key} className="p-0 d-flex">
              {isLoading ? (
                <Spinner animation="border" variant="secondary" />
              ) : (
                <Box
                  data={boxData[key]}
                  sector={key}
                  setShowSectorGraph={setShowSectorGraph}
                  setSectorData={setSectorData}
                  setCurrSector={setCurrSector}
                />
              )}
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Stocks;
