import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

const SP = ({
  spData,
  height,
  width,
  setNewDate,
  setShowSectorGraph,
  spBackground,
}) => {
  const svgRef = useRef();
  const [data, setData] = useState([]);
  const drawLineChart = () => {
    d3.select(svgRef.current).selectAll("*").remove();
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date))
      .range([margin.left, width - margin.right]);
    const yScale = d3
      .scaleLinear()
      .domain([
        Math.min(...data.map((d) => d.price)) - 5,
        Math.max(...data.map((d) => d.price)) + 5,
      ])
      .range([height - margin.bottom, margin.top]);
    const lineGenerator = d3
      .line()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.price));
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 5)
      .attr("d", lineGenerator)
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        const mouseX = d3.pointer(event)[0];
        const clickedDate = xScale.invert(mouseX);
        const closestDataPoint = data.reduce((prev, curr) =>
          Math.abs(curr.date - clickedDate) < Math.abs(prev.date - clickedDate)
            ? curr
            : prev
        );
        setNewDate(closestDataPoint.date);
        setShowSectorGraph(false);
      });

    svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .style("color", spBackground === "sp-bad" ? "white" : "black");
    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale))
      .style("color", spBackground === "sp-bad" ? "white" : "black");
  };
  useEffect(() => {
    const parseDate = d3.timeParse("%Y-%m-%dT%H:%M:%S");
    spData.data.forEach((d) => (d.date = parseDate(d.date)));
    setData(spData.data);
  }, [spData]);
  useEffect(() => {
    if (data.length > 1) {
      drawLineChart();
    }
  }, [width, height, data, spBackground]);
  return (
    <>
      <svg ref={svgRef}></svg>
    </>
  );
};

export default SP;
