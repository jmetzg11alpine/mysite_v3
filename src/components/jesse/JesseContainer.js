import { useEffect, useState } from "react";
import { getJesseData } from "./helpers";
import { Spinner } from "react-bootstrap";
import Header from "./Header";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import InfoTable from "./InfoTable";

const JesseContainer = ({ width, height }) => {
  const [data, setData] = useState([]);
  const [dataTypeSelected, setDataTypeSelected] = useState("overview");
  const [stockInfo, setStockInfo] = useState([]);
  const [descriptionOfHover, setDescriptionOfHover] = useState([]);
  const [count, setCount] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getJesseData(dataTypeSelected, setData, setIsLoading);
  }, [dataTypeSelected]);
  return (
    <>
      {isLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <div className="jesse-container">
          <Header
            dataTypeSelected={dataTypeSelected}
            setDataTypeSelected={setDataTypeSelected}
            descriptionOfHover={descriptionOfHover}
            count={count}
            setCount={setCount}
            width={width}
          />
          <div className="jesse-chart-container">
            <LineChart
              data={data}
              setStockInfo={setStockInfo}
              setDescriptionOfHover={setDescriptionOfHover}
              width={width * 0.6}
              height={height * 0.4}
              dataTypeSelected={dataTypeSelected}
              setDataTypeSelected={setDataTypeSelected}
            />
            <PieChart
              data={data}
              setStockInfo={setStockInfo}
              setDescriptionOfHover={setDescriptionOfHover}
              dataTypeSelected={dataTypeSelected}
              setDataTypeSelected={setDataTypeSelected}
              count={count}
              width={width * 0.38}
              height={height * 0.4}
            />
          </div>
          <InfoTable stockInfo={stockInfo} />
        </div>
      )}
    </>
  );
};

export default JesseContainer;
