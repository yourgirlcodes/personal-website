import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

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
      <Form>
        <label htmlFor="name">Name: </label>
        <Field id="name" name="name" placeholder="Who are you" />

        <label htmlFor="email">Email Address: </label>
        <Field id="email" name="email" type="email" />

        <label htmlFor="subject">Subject: </label>
        <Field id="subject" name="subject" />

        <label htmlFor="message">Message: </label>
        <Field id="text" name="text" />
        <button type="submit">Send!</button>
      </Form>
    </Formik>
  );
};
