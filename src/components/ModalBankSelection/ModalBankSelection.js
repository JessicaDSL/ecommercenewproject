import React from "react";

import { termsOfAuthorize } from "./content";

import Chase from "../../assets/image/Chase.png";
import SecureInternetCertificate from "../SecureInternetCertificate";
import { Background, Container, Form, Section, Button } from "./styles";
import { Link } from "react-router-dom";
import HeaderModal from "../HeaderModal";

const ModalBankSelection = () => {
  const title = "Choose an account";
  return (
    <Background>
      <Container>
        <HeaderModal title={title} />
        <img src={Chase} alt="logo" />
        <Form>
          <p>
            <input type="radio" name="Account" value="Checking Account" />
            <label>Checking Account - 6576</label>
          </p>
          <p>
            <input type="radio" name="Account" value="Savings Account" />
            <label>Savings Account - 6213</label>
          </p>
        </Form>
        <Section>
          <h5>shoes.on Transaction Authorization</h5>
          <p>
            Today, being 5/6/2019 09:55:37 AM GMT-03, by clicking "Continue", I
            agree to the Terms of Use and authorize shoes.on {termsOfAuthorize}
          </p>
        </Section>
        <a href="#">Printable version</a>
        <Link to="/confirm">
          <Button>Continue</Button>
        </Link>
      </Container>
      <SecureInternetCertificate />
    </Background>
  );
};

export default ModalBankSelection;
