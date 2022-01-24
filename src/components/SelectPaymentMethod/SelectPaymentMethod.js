import React, { useState, useContext, useEffect } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";

import MasterCard from "../../assets/image/paymentform/mastercard.png";
import Visa from "../../assets/image/paymentform/visa.png";
import Chase from "../../assets/image/paymentform/chaaaaase.png";
import America from "../../assets/image/paymentform/america.png";
import Wf from "../../assets/image/paymentform/wf.png";
import Pnc from "../../assets/image/paymentform/pnc.png";
import Citi from "../../assets/image/paymentform/citi.png";
import SelectBankFlag from "../SelectBankFlag";

import {
  Container,
  Background,
  PaymentOnline,
  ImageFlags,
  Btn,
  CardPayment,
  ApplePayment,
  OnlinePayBackground,
  ImageCardPayments,
} from "./styles";
import { ProductContext } from "../../context/ContextApi";

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

const SelectPaymentMethod = () => {
  let navigate = useNavigate();

  const [selectedPaymenth, setSelectedPaymenth] = useState(false);
  const [stateOnLinePayment, setStateOnLinePayment] = useState(false);
  const [stateCardPayment, setStateCardPayment] = useState(false);
  const [stateApplePayment, setStateApplePayment] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { getUrl } = useContext(ProductContext);

  useEffect(() => {
    getUrl(selectedPaymenth);

    selectedPaymenth === "/selectbank"
      ? setStateOnLinePayment(true)
      : setStateOnLinePayment(false);

    selectedPaymenth === "/cardpayment"
      ? setStateCardPayment(true)
      : setStateCardPayment(false);

    selectedPaymenth === "/applepayment"
      ? setStateApplePayment(true)
      : setStateApplePayment(false);
  }, [selectedPaymenth, getUrl]);

  useEffect(() => {}, []);

  return (
    <Container>
      <Background>
        <OnlinePayBackground stateOnLinePayment={stateOnLinePayment}>
          <button
            type="button"
            onClick={() => setSelectedPaymenth("/selectbank")}
          >
            <PaymentOnline>
              <p>Online Banking</p> <strong>SAVE $10</strong>
            </PaymentOnline>
            <ImageFlags>
              <img src={Chase} alt="Chase's logo" />
              <img src={America} alt="America's logo" />
              <img src={Wf} alt="Wf's logo" />
              <img src={Pnc} alt="Pnc's logo" />
              <img src={Citi} alt="Citi's logo" />
              <span>& more</span>
            </ImageFlags>
          </button>
        </OnlinePayBackground>
        <CardPayment stateCardPayment={stateCardPayment}>
          <button
            type="button"
            onClick={() => setSelectedPaymenth("/cardpayment")}
          >
            <div>
              <p>Card Payment</p>
            </div>
            <ImageCardPayments>
              <img src={MasterCard} alt="MasterCard's logo" />
              <img src={Visa} alt="Visa's logo" />
            </ImageCardPayments>
          </button>
        </CardPayment>

        <ApplePayment stateApplePayment={stateApplePayment}>
          <button
            type="button"
            onClick={() => setSelectedPaymenth("/applepayment")}
          >
            <div>Apple Pay</div>{" "}
            <div>
              <AppleIcon /> <span>Pay</span>
            </div>
          </button>
        </ApplePayment>
      </Background>

      <Btn
        type="button"
        selectedPaymenth={!selectedPaymenth}
        onClick={() => {
          if (!selectedPaymenth) {
            toast.error("Select one of the payment options!", {
              theme: "dark",
            });
          } else if (selectedPaymenth === "/selectbank") {
            handleOpen();
          } else {
            navigate(selectedPaymenth);
          }
        }}
      >
        Continue
      </Btn>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <SelectBankFlag />
        </Box>
      </StyledModal>
    </Container>
  );
};

export default SelectPaymentMethod;
//navigate(selectedPaymenth)
//<button onClick={()=>navigate(selectedPaymenth)}>aqui</button>
/*!selectedPaymenth
            ? toast.error("Select one of the payment options!", {
                theme: "dark",
              })
            : handleOpen()*/
