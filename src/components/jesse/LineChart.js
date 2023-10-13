import { useEffect, useRef } from "react";
import * as d3 from "d3";

const LineChart = ({
  data,
  setStockInfo,
  setDescriptionOfHover,
  width,
  height,
  dataTypeSelected,
  setDataTypeSelected,
}) => {
  const margin = { top: 10, right: 20, bottom: 70, left: 50 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const svgRef = useRef();
  const plotBars = () => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    data.sort((a, b) => b.performance - a.performance);
    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, innerWidth]);
    const y = d3
      .scaleLinear()
      .domain([
        d3.min(data, (d) => d.performance),
        d3.max(data, (d) => d.performance),
      ])
      .nice()
      .range([innerHeight, 0]);
    const xAxis = d3.axisBottom(x).tickSizeInner(0).tickSizeOuter(0);
    const yAxis = d3
      .axisLeft(y)
      .tickFormat((d) => `${d}%`)
      .ticks(5)
      .tickSize(0);
    svg
      .append("text")
      .attr("class", "y-axis-label")
      .attr("transform", "rotate(-90)")
      .attr("x", -innerHeight / 2)
      .attr("y", margin.left / 2.7)
      .style("text-anchor", "middle")
      .text("Performance");
    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.name))
      .attr("y", (d) => (d.performance >= 0 ? y(d.performance) : y(0)))
      .attr("width", x.bandwidth())
      .attr("height", (d) => Math.abs(y(d.performance) - y(0)))
      .attr("fill", (d) => d.color)
      .on("mouseover", (e, d) => {
        setStockInfo(d.info);
        setDescriptionOfHover({
          name: d.name,
          value: d.value,
          count: d.count,
        });
      })
      .on("click", (e, d) => {
        if (dataTypeSelected === "overview") {
          setDataTypeSelected(d.name);
        }
      });
    svg
      .append("g")
      .attr(
        "transform",
        `translate(${margin.left}, ${innerHeight + margin.top})`
      )
      .call(xAxis)
      .selectAll("text")
      .attr("transform", "rotate(-35)")
      .attr("text-anchor", "end")
      .attr("dx", ".3em")
      .attr("dy", "0.6em");
    svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)
      .call(yAxis);
  };
  useEffect(() => {
    if (typeof data !== undefined) {
      plotBars();
    }
  }, [data, width, height]);
  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default LineChart;
