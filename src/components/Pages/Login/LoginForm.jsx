import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Heading from "../../layout/Heading";

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username or email"),
  password: yup.string().required("Please enter your password"),
});

function LoginForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Form onSubmit={handleSubmit(props.onSubmit)} className="contact-form">
      {props.loginError && <Alert variant="danger">Following error occurred: {props.loginError}</Alert>}
      <Heading title="Login" />
      <fieldset disabled={props.submitting}>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Username</Form.Label>
          <Form.Control {...register("username")} type="text" placeholder="Username/email" className="shadow mb-1 rounded" />
          {errors.username && <span className="error-input">{errors.username.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control {...register("password")} type="password" placeholder="Password" className="shadow mb-1 rounded" />
          {errors.password && <span className="error-input">{errors.password.message}</span>}
        </Form.Group>
      </fieldset>
      <Button variant="primary" type="submit">
        {props.submitting ? "Logging in..." : "Login"}
      </Button>
    </Form>
  );
}

export default LoginForm;
