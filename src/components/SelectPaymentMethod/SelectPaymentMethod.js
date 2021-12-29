import React from "react";

import { Container, List, ListItem, PaymentOnline, Btn } from "./styles";
import MasterCard from "../../assets/image/paymentform/mastercard.png";
import Visa from "../../assets/image/paymentform/visa.png";
import Apple from "../../assets/image/paymentform/applepay.png";
import Chase from "../../assets/image/paymentform/chaaaaase.png";
import America from "../../assets/image/paymentform/america.png";
import Wf from "../../assets/image/paymentform/wf.png";
import Pnc from "../../assets/image/paymentform/pnc.png";
import Citi from "../../assets/image/paymentform/citi.png";
import { Link } from "react-router-dom";

const SelectPaymentMethod = ({ product }) => {
  return (
    <Container>
      <List>
        <ListItem>
          <PaymentOnline>
            Online Banking <strong>SAVE $10</strong>
          </PaymentOnline>
          <span>
            <img src={Chase} alt="logo do Chase" />
            <img src={America} alt="logo do America" />
            <img src={Wf} alt="logo do Wf" />
            <img src={Pnc} alt="logo do Pnc" />
            <img src={Citi} alt="logo do Citi" />
            <strong>& more</strong>
          </span>
        </ListItem>
        <ListItem>
          Card Payment
          <div>
            <img src={MasterCard} alt="logo do MasterCard" />
            <img src={Visa} alt="logo do Visa" />
          </div>
        </ListItem>
        <ListItem>
          Apple Pay <img src={Apple} alt="logo do Apple" />
        </ListItem>
      </List>
      <Link to="/selectbank">
        <Btn>Continue</Btn>
      </Link>
    </Container>
  );
};

export default SelectPaymentMethod;
