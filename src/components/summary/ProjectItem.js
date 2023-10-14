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

  return (
    <div>
      <div style={listItemStyle}>
        <div className="summary-icon" onClick={toggleExpansion}>
          {isExpanded ? <FaMinus /> : <FaPlus />}
        </div>
        <div>{project.title}</div>
      </div>
      {isExpanded && (
        <div className="summary-expanded-container">
          <ul>
            {project.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <div>
            <b>Result: </b>
            {project.result}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
