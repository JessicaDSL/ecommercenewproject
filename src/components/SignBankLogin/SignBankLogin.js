import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Chase from "../../assets/image/Chase.png";
import HeaderModal from "../HeaderModal";
import SecureInternetCertificate from "../SecureInternetCertificate";
import { ProductContext } from "../../context/ContextApi";
import { Container, Form, Button, Fieldset, Legend, Input } from "./styles";

const SignBankLogin = () => {
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(0);

  const { title, setTitle } = useContext(ProductContext);
  setTitle("Sign into your bank")

  const enable = email.length > 0 && password.length > 0;

  
  return (
    <Container>
      <HeaderModal title={title} />
      <img src={Chase} alt="Logo do Chase" />
      <Form>
        <Fieldset>
          <Legend>Username</Legend>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </Fieldset>
        <Input type="password" onChange={(e) => setPassword(e.target.value)} />
        <p>
          By clicking 'Agree & Sign in' you agree to the PayWithMyBank{" "}
          <a href="#">Terms of Use</a>
        </p>
        <Link to="/chooseaccount">
          <Button type="submit" disabled={!enable}>
            Agree & Sing In
          </Button>
        </Link>
      </Form>

      <SecureInternetCertificate />
    </Container>
  );
};

export default SignBankLogin;
