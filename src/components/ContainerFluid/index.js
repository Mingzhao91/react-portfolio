import React from "react";

import "./style.css";

function ContainerFluid(props) {
  return (
    <div
      className={
        "container-fluid " + (props.classes ? props.classes.join(" ") : "")
      }
      style={props.style}
    >
      {props.children}
    </div>
  );
}

export default ContainerFluid;
