import React, { useState, useEffect } from "react";

import { Background, Container, List, ListItem, Label, Input } from "./styles";
import SecureInternetCertificate from '../SecureInternetCertificate'
import { Link } from "react-router-dom";
import HeaderModal from "../HeaderModal";
//"Choose an account"

const SignToBankConfirm = () => {
  const title = "Sign into your bank";
  const link = '/confirm'

  const [state, setState] = useState(false)
  const [active, setActive] = useState(false)

  console.log(state)

  function handleCkeck(e) {
    console.log('e', e.target.checked)
    setState(e.target.checked)
  }

  useEffect(() => {
    setActive(true)
    console.log('active', active)
  }, [state, active])
  

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
        <form method="POST" >
        <Label>
          <Input type="checkbox" onChange={(e) => handleCkeck(e)}/>
          <span>Do not show this message again</span>
        </Label>
        <Link to='/signin'>
        <button type="subimit" disabled={!state} active={active}>Ok, got it!</button>
        </Link>
        </form>
      </Container>
      <SecureInternetCertificate />
    </Background>
  );
};

export default SignToBankConfirm;
