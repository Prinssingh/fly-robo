import React from "react";
import '../styles/blog/Tooltip.css'

const Tooltip = ({ children, tooltipText, position = "top" }) => {
  return (
    <div className="tooltip-container">
      {children}
      <div className={`tooltip-box ${position}`}>{tooltipText}</div>
    </div>
  );
};
export default Tooltip;