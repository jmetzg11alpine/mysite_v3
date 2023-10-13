import { useRef, useEffect } from "react";
import * as d3 from "d3";

const PieChart = ({
  data,
  setStockInfo,
  setDescriptionOfHover,
  dataTypeSelected,
  setDataTypeSelected,
  count,
  width,
  height,
}) => {
  const pieRef = useRef();
  const makePie = () => {
    const svg = d3.select(pieRef.current);
    svg.selectAll("*").remove();

    const radius = Math.min(width - 100, height - 100) / 2;
    const pieGenerator = d3.pie().value((d) => {
      if (count) {
        return d.count;
      } else {
        return d.value;
      }
    });
    const pieData = pieGenerator(data);
    const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);
    pieData.sort((a, b) => b.data.performance - a.data.performance);
    // pie chart
    svg
      .selectAll("path")
      .data(pieData)
      .enter()
      .append("path")
      .attr("d", arcGenerator)
      .attr("fill", (d) => d.data.color)
      .attr("transform", `translate(${width / 2.8}, ${height / 2.4})`)
      .on("mouseover", (e, d) => {
        setStockInfo(d.data.info);
        setDescriptionOfHover({
          name: d.data.name,
          value: d.data.value,
          count: d.data.count,
        });
      })
      .on("click", (e, d) => {
        if (dataTypeSelected === "overview") {
          setDataTypeSelected(d.data.name);
        }
      });
    // legend
    const legendData = pieData.slice(0, 13);
    const legend = svg
      .selectAll(".legend")
      .data(legendData)
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr(
        "transform",
        (d, i) => `translate(${width * -0.1}, ${i * 20 + 20})`
      );
    legend
      .append("rect")
      .attr("x", width + width * 0.03)
      .attr("width", 15)
      .attr("height", 15)
      .style("fill", (d) => d.data.color);
    legend
      .append("text")
      .attr("x", width + width * 0.01)
      .attr("y", 9)
      .attr("dy", "0.35em")
      .style("text-anchor", "end")
      .text((d) => {
        if (count) {
          return `${d.data.name} ${d.data.count}`;
        } else {
          return `${d.data.name} $${d.data.value}`;
        }
      });
  };
  useEffect(() => {
    if (typeof data !== undefined) {
      makePie();
    }
  }, [dataTypeSelected, count, data, width, height]);
  return (
    <>
      <svg ref={pieRef} width={width} height={height}></svg>
    </>
  );
};

export default PieChart;
