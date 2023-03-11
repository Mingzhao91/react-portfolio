// import libraries
import React, { isValidElement, useState } from "react";

// import components
// import ContainerFluid from "../ContainerFluid";
// import Row from "../Row";
// import Col from "../Col";

// import functions
import { validateEmail } from "../../utils/helpers";

// import styles
import "./style.css";

function ContactForm() {
  // init states for inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  // init state for messages
  const [sentMessage, setSentMessage] = useState("");
  const [errorNameMessage, setNameErrorMessage] = useState("");
  const [errorSubjectMessage, setSubjectErrorMessage] = useState("");
  const [errorContentMessage, setContentErrorMessage] = useState("");
  const [errorEmailMessage, setEmailErrorMessage] = useState("");

  const clearErrorMessages = () => {
    setNameErrorMessage("");
    setEmailErrorMessage("");
    setSubjectErrorMessage("");
    setContentErrorMessage("");
  };

  // update states
  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    // clear error messages
    clearErrorMessages();

    // Based on the input type, we set the state of either name, email, subject and message
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "subject") {
      setSubject(inputValue);
    } else {
      setContent(inputValue);
    }
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // stop rocessing if email or name or subject or message is empty
    const mandatoryMsg = "Please fill in this field";

    if (
      !name ||
      !email ||
      (email && !validateEmail(email)) ||
      !subject ||
      !content
    ) {
      if (!name) {
        setNameErrorMessage(mandatoryMsg);
      }

      if (!email) {
        setEmailErrorMessage(mandatoryMsg);
      } else if (!validateEmail(email)) {
        setEmailErrorMessage("Please type in an valid Email");
      }

      if (!subject) {
        setSubjectErrorMessage(mandatoryMsg);
      }

      if (!content) {
        setContentErrorMessage(mandatoryMsg);
      }

      return;
    }

    // show success message
    setSentMessage("You message is successfully sent");
    // clear out the inputS after an email is sent.
    setEmail("");
    setName("");
    setSubject("");
    setContent("");
    clearErrorMessages();
    setTimeout(() => {
      setSentMessage("");
    }, 5000);
  };

  return (
    <section>
      <form className="needs-validation">
        <div className="mb-3">
          <input
            className={
              errorNameMessage ? "form-control is-invalid" : "form-control"
            }
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
            required
          />
          {errorNameMessage && (
            <div className="invalid-feedback">{errorNameMessage}</div>
          )}
        </div>
        <div className="mb-3">
          <input
            className={
              errorEmailMessage ? "form-control is-invalid" : "form-control"
            }
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            required
          />
          {errorEmailMessage && (
            <div className="invalid-feedback">{errorEmailMessage}</div>
          )}
        </div>
        <div className="mb-3">
          <input
            className={
              errorSubjectMessage ? "form-control is-invalid" : "form-control"
            }
            value={subject}
            name="subject"
            onChange={handleInputChange}
            type="text"
            placeholder="Subject"
          />
          {errorSubjectMessage && (
            <div className="invalid-feedback">{errorSubjectMessage}</div>
          )}
        </div>
        <div className="mb-3">
          <textarea
            className={
              errorContentMessage ? "form-control is-invalid" : "form-control"
            }
            value={content}
            name="content"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
            rows="8"
          ></textarea>
          {errorContentMessage && (
            <div className="invalid-feedback">{errorContentMessage}</div>
          )}
        </div>
        <div className="mb-3">
          <button
            type="button"
            className="btn btn-info"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
          {sentMessage && (
            <span className="ps-2 text-success">{sentMessage}</span>
          )}
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
