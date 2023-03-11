import React from "react";

function Col(props) {
  const size = props.size
    ? props.size
        .split(" ")
        .map((size) => "col-" + size)
        .join(" ")
    : "";

  const classes = props.classes ? props.classes.join(" ") : "";

  return <div className={`${size} ${classes}`}>{props.children}</div>;
}

export default Col;
