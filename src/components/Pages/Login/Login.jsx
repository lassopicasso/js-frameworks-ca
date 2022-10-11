import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import { TOKEN_PATH } from "../../../constants/api";
import AuthContext from "../../../context/AuthContext";
import LoginForm from "./LoginForm";

const url = TOKEN_PATH;
function Login() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);

  /*If user try to get to the login page while being logged in. Redirected to admin*/
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate("/admin");
    }
  }, [auth, navigate]);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);
    console.log(data);

    try {
      console.log(url);
      const response = await axios.post(url, data);
      console.log("response", response.data);
      setAuth(response.data);
      navigate("/admin");
    } catch (error) {
      console.log("error", error.message);
      setLoginError(error.message);
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <Container className="contact__container mt-5">
      <LoginForm onSubmit={onSubmit} submitting={submitting} loginError={loginError} />
    </Container>
  );
}

export default Login;
