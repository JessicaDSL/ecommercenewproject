/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";

import "react-toastify/dist/ReactToastify.css";
import HeaderModal from "../HeaderModal";
import ModalBankSelection from "../ModalBankSelection";
import SecureInternetCertificate from "../SecureInternetCertificate";
import { ProductContext } from "../../context/ContextApi";
import {
  Container,
  Form,
  Button,
  Fieldset,
  Legend,
  Input,
  BankLogo,
  PasswordWard,
  EmailWard,
} from "./styles";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  height: 400,
  overflow: "auto",
  bgcolor: "#141628",
  border: "2px solid #000",
  p: 2,
  px: 0,
  pb: 3,
};

const SignBankLogin = () => {
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(0);
  const [stateEmail, setStateEmail] = useState(false);
  const [statePassword, setStatePassword] = useState(false);
  const [enableButton, setEnableButton] = useState(false);
  const [enableEmail, setEnableEmail] = useState(0);
  const [enablePassword, setEnablePassword] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { title, setTitle, bankFlag } = useContext(ProductContext);
  setTitle("Sign into your bank");

  const enable = email.length > 0 && password.length > 0;

  const wardPassword = [
    { rule: "Must contain at least one digit!" },
    { rule: "Must contain at least one lowercase letter!" },
    { rule: "Must contain at least one capital letter!" },
    { rule: "Must contain at least one special character!" },
    { rule: "Must contain at least 8 of the characters!" },
  ];

  useEffect(() => {
    function handleEmail() {
      const regex = /\S+@\S+\.\S+/;
      return regex.test(email);
    }
    email <= 0 ? setEnableEmail(true) : setEnableEmail(false);
    if (handleEmail() === true || enableEmail === true) {
      setStateEmail(true);
    } else {
      setStateEmail(false);
    }
    handleEmail();
  }, [email, enableEmail, stateEmail]);

  useEffect(() => {
    function handlePassword() {
      const regex = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,20}$/;
      return regex.test(password);
    }
    password <= 0 ? setEnablePassword(false) : setEnablePassword(true);
    if (handlePassword() === true || enablePassword === false) {
      setStatePassword(true);
    } else {
      setStatePassword(false);
    }
    handlePassword();
  }, [password, statePassword, enablePassword]);

  useEffect(() => {
    password <= 0 ? setEnablePassword(false) : setEnablePassword(true);
  }, [email, password]);

  useEffect(() => {
    if (enable === true && statePassword === true && stateEmail === true) {
      setEnableButton(false);
    } else {
      setEnableButton(true);
    }
  }, [stateEmail, statePassword, enable]);

  return (
    <Container>
      <HeaderModal title={title} />
      <BankLogo>
        <img src={bankFlag.image} alt={`${bankFlag.name}'s logo`} />
        <h2>{bankFlag.name}</h2>
      </BankLogo>
      <Form stateEmail={stateEmail}>
        <Fieldset>
          <Legend>Username</Legend>
          <input
            type="email"
            placeholder="example@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <EmailWard stateEmail={stateEmail}>
            Please enter a valid email!
          </EmailWard>
        </Fieldset>

        <Input type="password" onChange={(e) => setPassword(e.target.value)} />
        <PasswordWard statePassword={statePassword}>
          {wardPassword.map((item) => (
            <li>{item.rule}</li>
          ))}
        </PasswordWard>
        <p>
          By clicking 'Agree & Sign in' you agree to the PayWithMyBank{" "}
          <a href="#">Terms of Use</a>
        </p>

        <Button
          type="button"
          enableButton={enableButton}
          onClick={() =>
            enableButton
              ? toast.error("Fill in the fields correctly!", {
                  theme: "dark",
                })
              : handleOpen()
          }
        >
          Agree & Sing In
        </Button>
        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={open}
          onClose={handleClose}
          BackdropComponent={Backdrop}
        >
          <Box sx={style}>
            <ModalBankSelection />
          </Box>
        </StyledModal>
      </Form>

      <SecureInternetCertificate />
    </Container>
  );
};

export default SignBankLogin;
