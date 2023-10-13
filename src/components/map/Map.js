import { useState, useRef, useEffect } from "react";
import { makeMap, makeDotes } from "./helpers";
import ToolTip from "./ToolTip";
const Map = ({ selectedYear }) => {
  const mapRef = useRef(null);
  const [view, setView] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [content, setContent] = useState(null);
  const [screenPoint, setScreenPoint] = useState(null);
  const [showToolTip, setShowToolTip] = useState(false);
  useEffect(() => {
    if (!mapRef?.current) return;
    const mapView = makeMap(
      mapRef.current,
      setContent,
      setScreenPoint,
      setShowToolTip
    );
    setView(mapView);
    setMapLoaded(true);
    return () => {
      if (mapView) {
        mapView.destroy();
      }
    };
  }, []);
  useEffect(() => {
    if (mapLoaded && view) {
      makeDotes(view, selectedYear);
    }
  }, [selectedYear, mapLoaded]);
  return (
    <div className="mapDiv" ref={mapRef}>
      <ToolTip
        showToolTip={showToolTip}
        screenPoint={screenPoint}
        content={content}
      />
    </div>
  );
};

export default Map;
