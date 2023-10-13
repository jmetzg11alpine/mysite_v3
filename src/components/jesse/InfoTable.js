import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const InfoTable = ({ stockInfo }) => {
  const [sortColumn, setSortColumn] = useState("symbol");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (colName) => {
    if (sortColumn === colName) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(colName);
      setSortDirection("asc");
    }
  };

  const sortedStockInfo = [...stockInfo].sort((a, b) => {
    const A = a[sortColumn];
    const B = b[sortColumn];
    if (sortDirection === "asc") {
      if (A < B) return -1;
      if (A > B) return 1;
    } else {
      if (A > B) return -1;
      if (A < B) return 1;
    }
    return 0;
  });

  return (
    <div className="jesse-info-table">
      {sortedStockInfo.length > 0 && (
        <Table striped bordered hover>
          <colgroup>
            <col style={{ width: "20%" }} />
            <col style={{ width: "40%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "20%" }} />
          </colgroup>
          <thead>
            <tr>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => handleSort("symbol")}
              >
                Symbol{" "}
                {sortColumn === "symbol" &&
                  (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => handleSort("description")}
              >
                Description{" "}
                {sortColumn === "description" &&
                  (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => handleSort("value")}
              >
                Value{" "}
                {sortColumn === "value" &&
                  (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => handleSort("performance")}
              >
                Percent Change{" "}
                {sortColumn === "performance" &&
                  (sortDirection === "asc" ? "↑" : "↓")}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedStockInfo.map((info, index) => (
              <tr key={index}>
                <td>{info.symbol}</td>
                <td>{info.description}</td>
                <td>${info.value}</td>
                <td>{info.performance}%</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default InfoTable;
