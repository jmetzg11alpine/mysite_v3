import { useEffect, useState } from "react";

const calculatePosition = (screenPoint, setTop, setLeft) => {
  const width = window.innerWidth;
  const x = screenPoint.x;
  const y = screenPoint.y;
  if (y < 80) {
    setTop(y + 200);
  } else {
    setTop(y + 100);
  }
  if (x > width / 2) {
    setLeft(x - 220);
  } else {
    setLeft(x + 30);
  }
};

const ToolTip = ({ showToolTip, screenPoint, content }) => {
  const [top, setTop] = useState(30);
  const [left, setLeft] = useState(30);
  const style = {
    zIndex: 1000,
    position: "absolute",
    display: showToolTip ? "block" : "none",
    padding: "0 .5rem",
    background: "#d3d3d3",
    border: "2px solid #a2a2a2",
    textAlign: "center",
    maxWidth: "40%",
    top: top,
    left: left,
  };
  const titleStyle = {
    fontWeight: "bold",
  };
  const separatorStyle = {
    borderTop: "1px solid #a2a2a2",
    margin: "2px 0",
  };
  useEffect(() => {
    if (screenPoint) {
      calculatePosition(screenPoint, setTop, setLeft);
    }
  }, [screenPoint]);
  return (
    <>
      {showToolTip && (
        <div style={style}>
          <div style={titleStyle}>{content.title}</div>
          <hr style={separatorStyle} />
          <div style={{ fontSize: ".8rem" }}>{content.content}</div>
        </div>
      )}
    </>
  );
};

export default ToolTip;
