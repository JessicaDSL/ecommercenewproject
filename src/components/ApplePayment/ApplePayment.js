import React from "react";
import { Container } from "./styles";

const ApplePayment = () => {
  return (
    <Container>
      <div>Apple Pay logo da Apple</div>

      <h3>Opções de pagamento *</h3>
      <input type="checkbox" name="option" />
      <label>1x de R$ 200,00</label>
      <input type="checkbox" name="option" />
      <label>2x de R$ 200,00</label>
      <input type="checkbox" name="option" />
      <label>3x de R$ 200,00</label>
    </Container>
  );
};

export default ApplePayment;
