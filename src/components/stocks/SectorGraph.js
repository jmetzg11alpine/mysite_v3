import { useState, useEffect, useRef } from "react";
import { Row, Button, Col } from "react-bootstrap";
import * as d3 from "d3";
import {
  graphStock,
  removeStock,
  uniqueColors,
  returnSectorTitle,
} from "./helpers";

const SectorGraph = ({ currSector, sectorData, height, width }) => {
  const [data, setData] = useState({});
  const [visibleSymbols, setVisibleSymbols] = useState({});
  const [uniqueDates, setUniqueDates] = useState([]);
  const svgRef = useRef();
  const margin = { top: 10, right: 20, bottom: 30, left: 40 };
  const svgWidth = width;
  const svgHeight = height * 0.85;
  const svg = d3.select(svgRef.current);
  const colorScale = d3
    .scaleOrdinal()
    .domain(d3.range(0, 15))
    .range(uniqueColors);
  const xScale = d3
    .scaleTime()
    .domain(d3.extent(uniqueDates))
    .range([margin.left, svgWidth - margin.right]);
  const yScale = d3
    .scaleLinear()
    .domain([0, 105])
    .range([svgHeight - margin.bottom, margin.top]);
  const handleVisibleClick = (symbol, i) => {
    const updatedVisibleSymbols = { ...visibleSymbols };
    updatedVisibleSymbols[symbol] = !updatedVisibleSymbols[symbol];
    if (updatedVisibleSymbols[symbol]) {
      graphStock(symbol, data, svg, xScale, yScale, colorScale(i));
    } else {
      removeStock(symbol, svg);
    }
    setVisibleSymbols(updatedVisibleSymbols);
  };

  useEffect(() => {
    if (!sectorData.data) return;
    const formattedData = {};
    const initialVisibility = {};
    Object.entries(sectorData.data).forEach(([symbol, symbolData]) => {
      initialVisibility[symbol] = false;
      formattedData[symbol] = symbolData.data.map((d) => ({
        x: d3.timeParse("%Y-%m-%d")(d.x),
        y: d.y,
      }));
    });
    setUniqueDates(Object.values(formattedData)[0].map((d) => d.x));
    setData(formattedData);
    setVisibleSymbols(initialVisibility);
  }, [sectorData]);
  useEffect(() => {
    if (!data || uniqueDates.length === 0) return;
    svg.selectAll("*").remove();
    svg.attr("width", svgWidth).attr("height", svgHeight).append("g");
    svg
      .append("g")
      .attr("transform", `translate(0, ${svgHeight - margin.bottom})`)
      .call(d3.axisBottom(xScale));
    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale));
  }, [height, width, data]);

  return (
    <>
      <Row
        style={{ height: height * 0.05 }}
        className="stocks-sector-title-container"
      >
        {returnSectorTitle(currSector)}
      </Row>
      <Row className="sector-graph" style={{ height: height * 0.82 }}>
        <svg ref={svgRef} style={{ width: svgWidth, height: svgHeight }}></svg>
      </Row>
      <Row
        className="sector-legend d ms-5"
        style={{
          height: height * 0.13,
          display: "flex",
          alignItems: "center",
        }}
      >
        {Object.keys(data).map((symbol, i) => (
          <Col xs="auto" key={symbol}>
            <Button
              className="btn btn-primary btn-sm"
              style={{
                width: "100%",
                maxWidth: "100%",
                backgroundColor: visibleSymbols[symbol]
                  ? colorScale(i)
                  : "#d3d3d3",
                border: "none",
              }}
              onClick={() => handleVisibleClick(symbol, i)}
            >
              {symbol}
            </Button>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default SectorGraph;
