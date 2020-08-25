import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import "../FindMe.css";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("Hey, YourGirlCodes");
  const [text, setMessage] = useState("I'd like to chat!");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = values => {
    setLoading(true);
    const { email, name, subject, text } = values;
    axios
      .post("/sendEmail", {
        email,
        name,
        subject,
        text
      })
      .then(clearValues());
  };

  const clearValues = () => {
    setLoading(false);
    setName("");
    setSubject("Hey, YourGirlCodes");
    setMessage("I'd like to chat!");
    setEmail("");
  };

  return (
    <Formik
      initialValues={{
        name,
        subject,
        email,
        text
      }}
      onSubmit={values => handleSubmit(values)}
    >
      <Form className="form-container">
        <div className="form-firststripe">
          <Field className="name-field" id="name" name="name" placeholder="Your Name" />
          <Field className="name-field" id="email" name="email" type="email" placeholder="Your Email" />
        </div>

        <div className="subject-line">
          <label htmlFor="subject">Subject: </label>
          <Field id="subject" name="subject" />
        </div>

        <div className="message-container">
          <label htmlFor="message">Message: </label>
          <Field id="text" name="text" as="textarea" />
        </div>
        <button id="send" type="submit">Send</button>
      </Form>
    </Formik>
  );
};
