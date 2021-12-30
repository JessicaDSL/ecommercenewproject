import React from "react";
import { Link } from "react-router-dom";

import Chase from "../../assets/image/Chase.png";
import HeaderModal from "../HeaderModal";
import SecureInternetCertificate from "../SecureInternetCertificate";
import { Container, Form, Button, Fieldset, Legend, Input } from "./styles";

const SignBankLogin = () => {
  const title = "Sign into your bank";

  return (
    <Container>
      <HeaderModal title={title} />
      <img src={Chase} alt="Logo do Chase" />
      <Form>
        <Fieldset>
          <Legend>Username</Legend>
          <input type="text" />
        </Fieldset>
        <Input type="password" />
        <p>
          By clicking 'Agree & Sign in' you agree to the PayWithMyBank{" "}
          <a href="#">Terms of Use</a>
        </p>
        <Link to='/chooseaccount'>
        <Button>Agree & Sing In</Button>
        </Link>
      </Form>
      <strong>
        <SecureInternetCertificate />
      </strong>
    </Container>
  );
};

export default SignBankLogin;
