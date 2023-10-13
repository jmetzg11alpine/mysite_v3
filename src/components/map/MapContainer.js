import { useState } from "react";
import TimeBar from "./TimeBar";
import Map from "./Map";

function MapContainer() {
  const [selectedYear, setSelectedYear] = useState("overview");
  return (
    <>
      <TimeBar selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
      <Map selectedYear={selectedYear} />
    </>
  );
}

export default MapContainer;
