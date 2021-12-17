import React from "react";
import HeaderSignBank from "../HeaderSignBank/HeaderSignBank";
import { Background, Container, List, ListItem, Label, Input } from "./styles";
import SecureInternetCertificate from '../SecureInternetCertificate'
import { Link } from "react-router-dom";
//"Choose an account"

const SignToBankConfirm = () => {
  const title = "Sign into your bank";

  return (
    <Background>
      <HeaderSignBank title={title} />
      <Container>
        <h2>
          shoes<strong>.on</strong>
        </h2>
        <p>About signing into Online Banking</p>
        <List>
          <ListItem>This is a secure connection to Chase</ListItem>
          <ListItem>Your bank login cannot be seen by shoes.on</ListItem>
        </List>
        <Label>
          <Input type="checkbox" />
          <span>Do not show this message again</span>
        </Label>
        <Link to='/signin'>
        <button>Ok, got it!</button>
        </Link>
      </Container>
      <SecureInternetCertificate />
    </Background>
  );
};

export default SignToBankConfirm;
