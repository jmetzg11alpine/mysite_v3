import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import Polyline from "@arcgis/core/geometry/Polyline";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import { dataByYears } from "./data";

const calculateColor = (year) => {
  const minYear = 2007;
  const maxYear = 2023;
  const normalizedValue = (year - minYear) / (maxYear - minYear);
  const red = Math.floor(255 * normalizedValue);
  const blue = 255 - red;
  return `rgb(${red}, 0, ${blue})`;
};

export const renderYearLabels = (handleYearChange, selectedYear) => {
  const years = [];
  const screenWidth = window.innerWidth;
  for (let year = 2007; year <= 2023; year++) {
    const twoDigits = year.toString().slice(-2);
    const labelStyle = {
      background: year === selectedYear ? "" : `${calculateColor(year)}`,
      cursor: "pointer",
      borderRadius:
        year === 2007
          ? ".8rem 0 0 .8rem"
          : year === 2023
          ? "0 .8rem .8rem 0"
          : "",
      border: `.05rem solid ${calculateColor(year)}`,
      color: year === selectedYear ? "black" : "white",
    };
    years.push(
      <span
        className="map-year-info years-numbers"
        style={labelStyle}
        key={year}
        onClick={() => handleYearChange(year)}
      >
        {twoDigits}
      </span>
    );
  }
  return years;
};

export const makeMap = (ref, setContent, setScreenPoint, setShowToolTip) => {
  const map = new Map({ basemap: "osm" });
  const view = new MapView({
    map: map,
    container: ref,
    center: [15, 0],
    zoom: 3,
  });
  view.on("pointer-move", (event) => {
    view.hitTest(event).then((response) => {
      if (response.results.length) {
        setContent(response.results[0].graphic.attributes.info);
        setScreenPoint(response.screenPoint);
        setShowToolTip(true);
      } else {
        setShowToolTip(false);
      }
    });
  });
  return view;
};

const removeAndMove = (view, startLocation) => {
  view.map.removeAll();
  const newCenter = [startLocation.longitude, startLocation.latitude];
  view.goTo({ center: newCenter, zoom: startLocation.zoom });
};

const addTrail = (layer, data, year) => {
  for (const trail of data) {
    const lineGeometry = new Polyline({
      paths: trail.coordinates,
    });
    const simpleLineSymbol = new SimpleLineSymbol({
      color: calculateColor(year),
      width: 1,
    });
    const graphicLine = new Graphic({
      geometry: lineGeometry,
      symbol: simpleLineSymbol,
      attributes: { info: trail.info },
    });
    layer.add(graphicLine);
  }
};

export const makeDotes = (view, year) => {
  if (!view.map) return;
  let data;
  if (year === "overview") {
    data = dataByYears.years;
  } else {
    data = dataByYears[year];
  }
  // if (year !== "overview") {
  //   removeAndMove(view, data.start);
  // }
  if (view) {
    removeAndMove(view, data.start);
  }

  const graphicsLayer = new GraphicsLayer();
  view.map.add(graphicsLayer);
  if (data.trail.exists) {
    addTrail(graphicsLayer, data.trail.data, year);
  }
  for (const location of data.data) {
    const point = new Point({
      longitude: location.longitude,
      latitude: location.latitude,
    });
    const simpleMarkerSymbol = new SimpleMarkerSymbol({
      color: calculateColor(location.year),
      size: location.size * 6,
    });
    const graphicPoint = new Graphic({
      geometry: point,
      symbol: simpleMarkerSymbol,
      attributes: { info: location.info },
    });
    graphicsLayer.add(graphicPoint);
  }
};
