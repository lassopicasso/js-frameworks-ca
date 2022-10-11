import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ConactForm from "./ConactForm";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function onSubmit(data) {
    console.log(data);
    setSubmitted(true);
  }

  return (
    <Container className="contact__container">
      <ConactForm onSubmit={onSubmit} submitted={submitted} />
    </Container>
  );
}
export default Contact;
