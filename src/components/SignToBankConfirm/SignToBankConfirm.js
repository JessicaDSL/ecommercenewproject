import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import SecureInternetCertificate from "../SecureInternetCertificate";
import HeaderModal from "../HeaderModal";
import { ProductContext } from "../../context/ContextApi";

import { Background, Container, List, ListItem, Label, Input } from "./styles";

const SignToBankConfirm = () => {
  const [state, setState] = useState(false);
  const [active, setActive] = useState(false);

  const { title, setTitle } = useContext(ProductContext);
  setTitle("Sign into your bank");

  function handleCkeck(e) {
    setState(e.target.checked);
  }

  useEffect(() => {
    setActive(true);
  }, [state, active]);

  return (
    <Background>
      <HeaderModal title={title} />
      <Container>
        <h2>
          shoes<strong>.on</strong>
        </h2>
        <p>About signing into Online Banking</p>
        <List>
          <ListItem>This is a secure connection to Chase</ListItem>
          <ListItem>Your bank login cannot be seen by shoes.on</ListItem>
        </List>
        <form method="POST">
          <Label>
            <Input type="checkbox" onChange={(e) => handleCkeck(e)} />
            <span>Do not show this message again</span>
          </Label>
          <Link to="/signin">
            <button type="button" active={active}>
              Ok, got it!
            </button>
          </Link>
        </form>
      </Container>
      <SecureInternetCertificate />
    </Background>
  );
};

export default SignToBankConfirm;
