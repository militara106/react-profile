import React from "react";
import "./style.css";

function BorderContainer(props) {
  return (
      <div className="borderContainer">
          {props.children}
      </div>
  );
}

export default BorderContainer;
