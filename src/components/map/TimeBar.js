import React from "react";
import { renderYearLabels } from "./helpers";
import { Button } from "react-bootstrap";

const yearSummary = {
  overview: "Major locations from 2007-2023",
  2007: "Finished high school",
  2008: "Study abroad in Guadalajar, Mexico",
  2009: "Study abroad in Buenos Aires, Argentina",
  2010: "Study abroad in Accra, Ghana",
  2011: "Study abroad in Granada, Spain. First USA road trip",
  2012: "Finally finished university. Moved to Hong Kong",
  2013: "Finished contract in Jakarta. Had a horrible time in Palestine. Moved to Moscow",
  2014: "Opend English department in Moscow. Dream job and apartment",
  2015: "Most time I spent in one place since I was 18",
  2016: "English department is growing and everyone is happy",
  2017: "Started graduate school. First year is in Bologna, Italy",
  2018: "Second year in Washing DC",
  2019: "Finished graudate school. Moved back to Moscow",
  2020: "Covid times",
  2021: "Still Covid...",
  2022: "Data Science job in Phoenix, AZ",
  2023: "Full Stack job in Nashville, TN",
};

const TimeBar = ({ selectedYear, setSelectedYear }) => {
  const handleYearChange = (year) => {
    setSelectedYear(year);
  };
  const setToOverview = () => {
    setSelectedYear("overview");
  };
  return (
    <div className="map-years-container">
      <div className="map-button-container">
        {selectedYear !== "overview" && (
          <Button onClick={setToOverview}>Overview</Button>
        )}
        <div>{yearSummary[selectedYear]}</div>
      </div>
      <div className="map-info-container">
        <div className="map-year-info mt-2">
          Click a year to see where I worked or studied
        </div>
        <div>{renderYearLabels(handleYearChange, selectedYear)}</div>
        <div className="map-year-info mb-2">
          Hover over a dot or line for more details
        </div>
      </div>
    </div>
  );
};

export default TimeBar;
