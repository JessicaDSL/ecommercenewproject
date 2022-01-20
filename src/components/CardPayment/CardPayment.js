import React, { useContext, useState, useEffect } from "react";
import WarningIcon from "@material-ui/icons/Warning";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "../Footer";
import CartHeader from "../CartHeader";
import { formatCurrency } from "../../utils/utils";
import { ProductContext } from "../../context/ContextApi";
import { month, days } from "./mock";
import { Container, Form, Select, Warning, Button } from "./styles";

const CardPayment = () => {
  const { amount } = useContext(ProductContext);

  let navigate = useNavigate();

  const [cartNumber, setCartNumber] = useState("");
  const [enableCartNumber, setEnableCartNumber] = useState(false);
  const [stateCartNumber, setStateCartNumber] = useState(false);
  const [cartName, setCartName] = useState("");
  const [enableCartName, setEnableCartName] = useState(false);
  const [stateCartName, setStateCartName] = useState(false);
  const [numberCPF, setNumberCPF] = useState(false);
  const [enableCPF, setEnableCPF] = useState(false);
  const [stateCPF, setStateCPF] = useState(false);
  const [code, setCode] = useState(false);
  const [enableCode, setEnableCode] = useState(false);
  const [stateCode, setStateCode] = useState(false);
  const [enableButton, setEnableButton] = useState(false);

  const enable =
    cartNumber.length > 0 &&
    cartName.length > 0 &&
    numberCPF.length > 0 &&
    code.length > 0;

  useEffect(() => {
    function handleCartNumber() {
      const regex = /^([0-9]){8,16}$/;
      return regex.test(cartNumber);
    }
    cartNumber <= 0 ? setEnableCartNumber(false) : setEnableCartNumber(true);
    if (handleCartNumber() === true || enableCartNumber === false) {
      setStateCartNumber(true);
    } else {
      setStateCartNumber(false);
    }
    handleCartNumber();
  }, [cartNumber, enableCartNumber]);

  useEffect(() => {
    function handleCartName() {
      const regex = /[a-zA-Z]+$/;
      return regex.test(cartName);
    }
    cartName <= 0 ? setEnableCartName(false) : setEnableCartName(true);
    if (handleCartName() === true || enableCartName === false) {
      setStateCartName(true);
    } else {
      setStateCartName(false);
    }
    handleCartName();
  }, [cartName, enableCartName, stateCartName]);

  useEffect(() => {
    function handleCPF() {
      const regex = /^([0-9]){11}$/;
      return regex.test(numberCPF);
    }
    numberCPF <= 0 ? setEnableCPF(false) : setEnableCPF(true);
    if (handleCPF() === true || enableCPF === false) {
      setStateCPF(true);
    } else {
      setStateCPF(false);
    }
    handleCPF();
  }, [numberCPF, enableCPF, stateCPF]);

  useEffect(() => {
    function handleCode() {
      const regex = /^([0-9]){3}$/;
      return regex.test(code);
    }
    code <= 0 ? setEnableCode(false) : setEnableCode(true);
    if (handleCode() === true || enableCode === false) {
      setStateCode(true);
    } else {
      setStateCode(false);
    }
    handleCode();
  }, [code, enableCode, stateCode]);

  useEffect(() => {
    if (
      enable === true &&
      stateCartNumber === true &&
      stateCartName === true &&
      stateCPF === true &&
      stateCode === true
    ) {
      setEnableButton(false);
    } else {
      setEnableButton(true);
    }
  }, [stateCartNumber, stateCartName, stateCPF, stateCode, enable]);

  return (
    <Container>
      <CartHeader />
      <h2>Payment Details</h2>
      <Form>
        <div>
          <label>Number: (card number) </label>
          <input
            type="text"
            maxlength="19"
            placeholder="1111 2222 3333 4444"
            required="required"
            pattern="[0-9]+$"
            onChange={(e) => setCartNumber(e.target.value)}
          />
          <Warning state={stateCartNumber}>
            <WarningIcon /> Please enter the card number correctly!
          </Warning>
        </div>

        <div>
          <label>Name: (how is it on the card)</label>
          <input type="text" onChange={(e) => setCartName(e.target.value)} />
          <Warning state={stateCartName}>
            <WarningIcon /> Please enter the name on the card!
          </Warning>
        </div>

        <div>
          <label>CPF: (only numbers)</label>
          <input
            type="text"
            placeholder="000-000-000-00"
            onChange={(e) => setNumberCPF(e.target.value)}
          />
          <Warning state={stateCPF}>
            <WarningIcon /> Please enter the CPF correctly!
          </Warning>
        </div>

        <div>
          <label>Shelf life:</label>

          <Select>
            {days.map((date) => (
              <option>{date < 10 ? "0" + date : date}</option>
            ))}
          </Select>
          <Select>
            {month.map((date) => (
              <option>{date < 10 ? "0" + date : date}</option>
            ))}
          </Select>
        </div>

        <div>
          <label>Code(CVV):</label>
          <input
            type="text"
            placeholder="000"
            onChange={(e) => setCode(e.target.value)}
          />
          <Warning state={stateCode}>
            <WarningIcon /> Enter the code correctly!
          </Warning>
        </div>

        <div>
          <label>Installments: </label>
          <Select>
            <option>in cash R$ {formatCurrency(amount)}</option>
            <option>2x of R$ {formatCurrency(amount / 2)}</option>
            <option>3x of R$ {formatCurrency(amount / 3)}</option>
            <option>4x of R$ {formatCurrency(amount / 4)}</option>
            <option>5x of R$ {formatCurrency(amount / 5)}</option>
            <option>6x of R$ {formatCurrency(amount / 6)}</option>
          </Select>
        </div>
        <Button
          type="button"
          enableButton={!enableButton}
          onClick={() =>
            enableButton
              ? toast.error("Fill in the fields correctly!", {
                  theme: "dark",
                })
              : navigate("/completedpurchase")
          }
        >
          Complete Payment
        </Button>
      </Form>
      <Footer />
    </Container>
  );
};

export default CardPayment;
