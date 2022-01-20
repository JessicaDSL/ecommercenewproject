import React, { useState, useContext } from "react";

import { termsOfAuthorize } from "./content";

import { ProductContext } from "../../context/ContextApi";
import SecureInternetCertificate from "../SecureInternetCertificate";
import {
  Background,
  Container,
  BankLogo,
  Form,
  Section,
  Button,
} from "./styles";
import { useNavigate } from "react-router-dom";
import HeaderModal from "../HeaderModal";
import { toast } from "react-toastify";

const ModalBankSelection = () => {
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate()
  const { title, setTitle, bankFlag } = useContext(ProductContext);
  setTitle("Choose an account");

  return (
    <Background>
      <Container>
        <HeaderModal title={title} />
        <BankLogo>
          <img src={bankFlag.image} alt="logo" />
          <h2>{bankFlag.name}</h2>
        </BankLogo>
        <Form>
          <p>
            <input
              type="radio"
              name="Account"
              onClick={() => setChecked(true)}
            />
            <label>Checking Account - 6576</label>
          </p>
          <p>
            <input
              type="radio"
              name="Account"
              onClick={() => setChecked(true)}
            />
            <label>Savings Account - 6213</label>
          </p>
        
        <Section>
          <h5>shoes.on Transaction Authorization</h5>
          <p>{termsOfAuthorize}</p>
        </Section>
        
          <Button type="button" checked={checked} onClick={() => !checked ? toast.error("Selecione uma das opções de pagamento !", {
            theme: "dark"
          }) : navigate("/confirm")}>
            Continue
          </Button>
        
        </Form>
      </Container>
      <SecureInternetCertificate />
    </Background>
  );
};

export default ModalBankSelection;
