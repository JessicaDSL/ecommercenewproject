import React from "react";

import checked from "../../assets/image/checked.png";
import { Container } from "./styles";

const ProgressBar = () => {
  return (
    <Container>
      <div>
        <img src={checked} alt="check" />
        Cart
      </div>
      <hr />
      <div>
        <img src={checked} alt="check" />
        Payment options
      </div>
      <div>
        <img src={checked} alt="check" />
        Receipt
      </div>
    </Container>
  );
};

export default ProgressBar;
