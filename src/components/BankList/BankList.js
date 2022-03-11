import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";

import BankListCard from "../BankListCard";
import SignToBankConfirm from "../SignToBankConfirm";

import { Container } from "./styles";

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

const BankList = ({ banks = [] }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container>
      <ul>
        {banks.map((item) => (
          <li onClick={handleOpen}>
            <BankListCard
              key={item.id}
              image={item.image}
              url={item.url}
              name={item.name}
            />
            <IoIosArrowForward />
          </li>
        ))}
      </ul>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <SignToBankConfirm />
        </Box>
      </StyledModal>
    </Container>
  );
};

export default BankList;
