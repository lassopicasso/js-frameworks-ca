import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Heading from "../../layout/Heading";

const schema = yup.object().shape({
  firstName: yup.string().required("Please enter your first name").min(3, "Minimum 3 characters"),
  lastName: yup.string().required("Please enter your last name").min(4, "Minimum 4 characters"),
  email: yup.string().email().required("Please enter your email"),
  select: yup.string().required("Need to select an option"),
  message: yup.string().required("Message is required").min(10, "Minimum 10 characters"),
});

function ConactForm(props) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Form onSubmit={handleSubmit(props.onSubmit)} className="contact-form">
      <Heading title="Contact" />
      {props.submitted && <Alert variant="success">You have submitted</Alert>}
      <Form.Group className="mb-3">
        <Form.Label className="fw-bold">First Name</Form.Label>
        <Form.Control {...register("firstName")} type="text" placeholder="First Name" className="shadow mb-1 bg-white rounded" />
        {errors.firstName && <span className="error-input">{errors.firstName.message}</span>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="fw-bold">Last Name</Form.Label>
        <Form.Control {...register("lastName")} type="text" placeholder="Last Name" className="shadow mb-1 bg-white rounded" />
        {errors.lastName && <span className="error-input">{errors.lastName.message}</span>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="fw-bold">Email</Form.Label>
        <Form.Control {...register("email")} type="text" placeholder="example@something.com" className="shadow bg-white rounded " />
        {errors.email && <span className="error-input">{errors.email.message}</span>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="fw-bold">Game Option</Form.Label>
        <Form.Select onChange={(e) => setValue("select", e.target.value, { shouldValidate: true })} {...register("select")} className="shadow bg-white rounded">
          <option value="">Select option</option>
          <option value="Age of Empires">Age Of Empires</option>
          <option value="Conan Exiles">Conan Exiles</option>
          <option value="Other">Other</option>
        </Form.Select>
        {errors.select && <span className="error-input">{errors.select.message}</span>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="fw-bold">Message</Form.Label>
        <Form.Control {...register("message")} as="textarea" rows={3} placeholder="Write your message here" className="shadow bg-white rounded " />
        {errors.message && <span className="error-input">{errors.message.message}</span>}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ConactForm;
