import React from "react";

import Chase from "../../assets/image/Chase.png";
import HeaderSignBank from "../HeaderSignBank/HeaderSignBank";
import SecureInternetCertificate from "../SecureInternetCertificate";
import { Container, Form, Button, Fieldset, Legend, Input } from "./styles";

const SignBankLogin = () => {
  const title = "Sign into your bank";

  return (
    <Container>
      <HeaderSignBank title={title} />
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
        <Button>Agree & Sing In</Button>
      </Form>
      <strong>
        <SecureInternetCertificate />
      </strong>
    </Container>
  );
};

export default SignBankLogin;
