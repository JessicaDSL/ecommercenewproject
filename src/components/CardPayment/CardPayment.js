import React from "react";
import { Container } from "./styles";

const CardPayment = () => {

  function handleNumberCard(e) {
    const check = e.nativeEvent.data
    
  }

  return (
    <Container>
      <h2>Payment Details</h2>
      <form>
        <label>Número: </label>
        <input type="text" maxlength="19"  placeholder="1111 2222 3333 4444" required="required" pattern="[0-9]+$" onChange={handleNumberCard}/>
        
        <label>Nome: (Como está no cartão)</label>
        <input type="text" />

        <label>CPF:</label>
        <input type="text" placeholder="000-000-000-00"/>

        <label>Validade: </label>
        <input type="month"/>
        <input type="year"/>

        <label>Código(CVV):</label>
        <input type="text" placeholder="000-000-000-00"/>
        <label></label>
        
        <label>Parcelas: </label>
        <select>
          <option>Á vista  R$1000,00</option>
          <option>2x de R$1000,00</option>
          <option>3x de R$1000,00</option>
          <option>4x de R$1000,00</option>
          <option>5x de R$1000,00</option>
          <option>6x de R$1000,00</option>
        </select>

        <button type="submit">Concluir Pagamento</button>
      </form>
    </Container>
  );
};

export default CardPayment;
