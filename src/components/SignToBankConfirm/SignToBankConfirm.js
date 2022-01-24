import React, { useState, useEffect, useContext } from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";

import SecureInternetCertificate from "../SecureInternetCertificate";
import HeaderModal from "../HeaderModal";
import { ProductContext } from "../../context/ContextApi";
import SignBankLogin from "../SignBankLogin";

import { Background, Container, List, ListItem, Label, Input } from "./styles";

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

const SignToBankConfirm = () => {
  const [state, setState] = useState(false);
  const [active, setActive] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

          <button type="button" active={active} onClick={handleOpen}>
            Ok, got it!
          </button>
          <StyledModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open}
            onClose={handleClose}
            BackdropComponent={Backdrop}
          >
            <Box sx={style}>
              <SignBankLogin />
            </Box>
          </StyledModal>
        </form>
      </Container>
      <SecureInternetCertificate />
    </Background>
  );
};

export default SignToBankConfirm;
