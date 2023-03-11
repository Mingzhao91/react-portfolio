import React from "react";

function Row(props) {
  return (
    <div className={"row " + (props.classes ? props.classes.join(" ") : "")}>
      {props.children}
    </div>
  );
}

export default Row;
