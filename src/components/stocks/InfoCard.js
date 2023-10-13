import React from "react";

const InfoCard = () => {
  return (
    <div>
      <div className="stocks-info-card-title">S&P 500 Overview</div>
      <div className="stocks-info-card">
        Click on any part of the line to view sector performance.
      </div>
      <div className="stocks-info-card">
        Click on a sector for top stock information.
      </div>
      <div className="stocks-info-card">
        Sector stock prices have been normalized between 0 and 100.
      </div>
      <div className="stocks-info-card">
        Click the S&P 500 line to return to the general overview.
      </div>
    </div>
  );
};

export default InfoCard;
