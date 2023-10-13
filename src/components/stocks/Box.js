import { useState, useEffect, useRef } from "react";
import { LongDiv, sectorIcons, sectorTitles, getSectorData } from "./helpers";

const Box = ({
  data,
  sector,
  setShowSectorGraph,
  setSectorData,
  setCurrSector,
}) => {
  const [value, setValue] = useState("");
  const boxRef = useRef();
  const [boxHeight, setBoxHeight] = useState("auto");
  const [boxWidth, setBoxWidth] = useState("auto");
  const SectorIconComponent = sectorIcons[sector];
  const sectorTitle = sectorTitles[sector];
  const handleBoxClick = () => {
    setShowSectorGraph(true);
    getSectorData(sector, setSectorData);
    setCurrSector(sector);
  };
  useEffect(() => {
    if (boxRef.current) {
      const newBoxHeight = boxRef.current.clientHeight;
      setBoxHeight(newBoxHeight);
      const newBoxWidth = boxRef.current.clientWidth;
      setBoxWidth(newBoxWidth);
    }
  }, [value, data]);
  useEffect(() => {
    if (data) {
      setValue(data.change_average);
    }
  }, [data]);

  return (
    <div
      ref={boxRef}
      style={{
        height: "100%",
        width: "100%",
        border: `1px solid black`,
        cursor: "pointer",
      }}
      onClick={handleBoxClick}
    >
      <LongDiv value={value} />
      <div className="d-flex flex-column align-items-center justify-content-center mt-2">
        {SectorIconComponent && (
          <div className="my-1">
            <SectorIconComponent size={boxWidth * 0.15} />
          </div>
        )}
        <div className="text-center">
          <div className="stocks-box-info">{sectorTitle}</div>
          <div className="stocks-box-info">Daily Change: {value}%</div>
        </div>
      </div>
    </div>
  );
};

export default Box;
