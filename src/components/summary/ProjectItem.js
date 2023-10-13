import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const ProjectItem = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    borderBottom: "none",
    paddingTop: "10px",
    paddingBottom: "0",
  };
  if (!isExpanded) {
    listItemStyle.borderBottom = "1px solid #ccc";
    listItemStyle.paddingBottom = "10px";
  }

  const iconStyle = {
    cursor: "pointer",
    margin: "0 .5rem",
  };

  const ulStyle = {
    borderBottom: "1px solid #ccc",
    marginBottom: "0",
  };

  const liStyle = {
    marginLeft: "1.5rem",
  };
  return (
    <div>
      <div style={listItemStyle}>
        <div style={iconStyle} onClick={toggleExpansion}>
          {isExpanded ? <FaMinus /> : <FaPlus />}
        </div>
        <div>{project.title}</div>
      </div>
      {isExpanded && (
        <ul style={ulStyle}>
          {project.details.map((detail, index) => (
            <li style={liStyle} key={index}>
              {detail}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectItem;
