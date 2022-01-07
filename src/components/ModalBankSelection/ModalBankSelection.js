import React, {useState, useContext} from "react";

import { termsOfAuthorize } from "./content";

import { ProductContext } from "../../context/ContextApi";
import Chase from "../../assets/image/Chase.png";
import SecureInternetCertificate from "../SecureInternetCertificate";
import { Background, Container, Form, Section, Button } from "./styles";
import { Link } from "react-router-dom";
import HeaderModal from "../HeaderModal";

const ModalBankSelection = () => {

  const [checked, setChecked] = useState(false)

  const { title, setTitle } = useContext(ProductContext);
  setTitle("Choose an account")

  return (
    <Background>
      <Container>
        <HeaderModal title={title} />
        <img src={Chase} alt="logo" />
        <Form>
          <p>
            <input type="radio" name="Account" onClick={() => setChecked(true)}/>
            <label>Checking Account - 6576</label>
          </p>
          <p>
            <input type="radio" name="Account" onClick={() => setChecked(true)}/>
            <label>Savings Account - 6213</label>
          </p>
        </Form>
        <Section>
          <h5>shoes.on Transaction Authorization</h5>
          <p>
            {termsOfAuthorize}
          </p>
        </Section>
        <a href="#">Printable version</a>
        <Link to="/confirm">
          <Button type="submit" disabled={!checked}>Continue</Button>
        </Link>
      </Container>
      <SecureInternetCertificate />
    </Background>
  );
};

export default ModalBankSelection;
