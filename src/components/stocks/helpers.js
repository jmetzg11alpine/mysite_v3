import {
  GiDonkey,
  GiFarmTractor,
  GiOilPump,
  GiHealthPotion,
  GiBulldozer,
  GiHedgehog,
  GiMaterialsScience,
} from "react-icons/gi";
import { PiToiletPaperThin } from "react-icons/pi";
import { BsCart3, BsPiggyBank, BsHouse } from "react-icons/bs";
import { RiBaseStationFill } from "react-icons/ri";
import * as d3 from "d3";

const url = process.env.REACT_APP_API_URL;

export const boxDataKeys = [
  "commodities",
  "consumer_discretionary",
  "cosumer_staples",
  "energy",
  "finance",
  "health",
  "industrial",
  "real_estate",
  "technology",
  "utility",
];

const getBackground = (value) => {
  if (value <= -0.8) {
    return "sp-bad";
  } else if (value > -0.8 && value < 0.8) {
    return "sp-normal";
  } else {
    return "sp-good";
  }
};

export const getSPData = async (
  setBoxData,
  setSPData,
  setIsLoading,
  setSpBackground
) => {
  const response = await fetch(url + "sp", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseData = await response.json();
  const spData = responseData.sp;
  setSPData(spData);
  setBoxData(responseData);
  setIsLoading(false);
  setSpBackground(getBackground(spData.change));
};

export const getBoxDataFromDate = async (date, setBoxData, setSpBackground) => {
  const response = await fetch(url + "from_date", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ date: date }),
  });
  const responseData = await response.json();
  setBoxData(responseData);
  setSpBackground(getBackground(responseData.sp.change_average));
};

export const getSectorData = async (sector, setSectorData) => {
  const response = await fetch(url + "sector", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sector: sector }),
  });
  const responseData = await response.json();
  setSectorData(responseData);
};

export const LongDiv = ({ value }) => {
  const normalizedValue = Math.max(-2, Math.min(2, value));
  const arrowPosition = ((normalizedValue + 2) / 4) * 100 * 0.85;
  const arrowStyle = {
    left: `${arrowPosition}%`,
    transition: "left 1.5s ease, transform 1.5s",
  };
  return (
    <div className="color-bar mt-2">
      <div className="arrow" style={arrowStyle}></div>
    </div>
  );
};

export const sectorTitles = {
  commodities: "Commodities",
  consumer_discretionary: "Consumer Dis",
  cosumer_staples: "Staples",
  energy: "Energy",
  finance: "Finance",
  health: "Health",
  industrial: "Industrial",
  real_estate: "Real Estate",
  technology: "Tech",
  utility: "Utility",
  jesse: "Jesse",
  elya: "Elya",
};

export const sectorIcons = {
  commodities: GiFarmTractor,
  consumer_discretionary: BsCart3,
  cosumer_staples: PiToiletPaperThin,
  energy: GiOilPump,
  finance: BsPiggyBank,
  health: GiHealthPotion,
  industrial: GiBulldozer,
  real_estate: BsHouse,
  technology: GiMaterialsScience,
  utility: RiBaseStationFill,
  jesse: GiDonkey,
  elya: GiHedgehog,
};

export const graphStock = (symbol, data, svg, xScale, yScale, color) => {
  const lineData = data[symbol];
  const line = d3
    .line()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));
  const lineClass = `line-${symbol}`;
  svg
    .append("path")
    .datum(lineData)
    .attr("class", lineClass)
    .attr("fill", "none")
    .attr("stroke", color)
    .attr("stroke-width", 3)
    .attr("d", line);
};

export const removeStock = (symbol, svg) => {
  svg.select(`.line-${symbol}`).remove();
};

export const uniqueColors = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
  "#e377c2",
  "#7f7f7f",
  "#bcbd22",
  "#17becf",
  "#aec7e8",
  "#ffbb78",
  "#98df8a",
  "#ff9896",
  "#c5b0d5",
];

export const returnSectorTitle = (sectorKey) => {
  if (sectorKey === "cosumer_staples") {
    return "Consumer Staples";
  }
  const words = sectorKey.split("_");
  const title = words
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
  return title;
};
