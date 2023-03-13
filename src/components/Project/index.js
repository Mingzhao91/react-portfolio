// import libraries
import React from "react";

// import style
import "./style.css";

function Project(props) {
  return (
    <div className="d-flex flex-wrap justify-content-between  p-4 project-wrapper">
      <div
        className={
          parseInt(props.id) % 2 === 0
            ? "order-1 panel-left d-flex justify-content-center align-items-center"
            : "order-0 panel-left d-flex justify-content-center align-items-center"
        }
      >
        <div className="project-img-wrapper">
          <img className="project-img" src={props.image} alt={props.name}></img>
        </div>
      </div>
      <div
        className={
          parseInt(props.id) % 2 === 0
            ? "order-0 panel-right d-flex flex-column justify-content-center align-items-center p-3"
            : "order-1 panel-right d-flex flex-column justify-content-center align-items-center p-3"
        }
      >
        <p className="mb-2 project-name text-light">{props.name}</p>
        <p className="mb-3 project-description text-light">
          {props.description}
        </p>
        <div className="buttons">
          <a
            href={props.appUrl}
            target="_blank"
            rel="noreferrer"
            className="btn project-btn me-3 text-light"
          >
            Deployed Application
          </a>
          <a
            href={props.appUrl}
            target="_blank"
            rel="noreferrer"
            className="btn project-btn text-light"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
