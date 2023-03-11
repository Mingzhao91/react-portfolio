// import libraries
import React from "react";

// import components
import ContainerFluid from "../../components/ContainerFluid";
import Row from "../../components/Row";
import Col from "../../components/Col";
import ContactForm from "../../components/ContactForm";

// import styles
import "./style.css";

function Contact() {
  return (
    <ContainerFluid classes={["home-container"]}>
      <Row>
        <Col size="12 lg-9 md-8 ">
          <h2 className="text-white">Get in touch</h2>
          <ContactForm />
        </Col>
        <Col size="12 lg-3 md-4"></Col>
      </Row>
    </ContainerFluid>
  );
}

export default Contact;
