// import libraries
import React from "react";

// import components
import ContainerFluid from "../../components/ContainerFluid";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Skills from "../../components/Skills";

// import styles
import "./style.css";

function Home() {
  return (
    <ContainerFluid classes={["home-container"]}>
      <Row classes={["mb-4"]}>
        <Col size="12">
          <h1 className="title text-white">Let's start a project together</h1>
        </Col>
      </Row>
      <Row>
        <Col size="12">
          <p className="about">
            I am a highly competent Bubble.io developer and Servoy developer
            with 4 years experience developing a wide range of applications for
            clients. I have proven expertise in building CRM(Customer
            Relationship Management) applications. I understand the project
            lifecycle in depth and am very capable at all aspects of development
            from project planning to requirements gathering through to writing
            and testing code, creating documentation and support. Passionate
            about learning and development with a desire to apply skills on a
            larger development team. Eager to tackle more complex problems and
            continue to find ways to maximize user efficiency.
          </p>
        </Col>
      </Row>
      <Row>
        <Col size="12">
          <Skills />
        </Col>
      </Row>
    </ContainerFluid>
  );
}

export default Home;
